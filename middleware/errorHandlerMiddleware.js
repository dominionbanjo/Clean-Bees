import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  if (process.env.NODE_ENV === "development") {
    console.log(err);
  }
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong try again later";
  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
