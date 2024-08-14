import * as dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";
import express from "express";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
const app = express();

//public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//router imports
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRouter.js";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.json());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://res.cloudinary.com", "data:"],
      // Add other directives as needed
    },
  })
);
app.use(ExpressMongoSanitize());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

//routers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authenticateUser, userRouter);

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => console.log(`server running on port ${port}...`));
} catch (error) {
  console.log(error);
  process.exit(1);
}
