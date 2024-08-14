import { Router } from "express";
import { login, register, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
import rateLimit from "express-rate-limit";

const router = Router();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes" },
});

router.post("/login", apiLimiter, validateLoginInput, login);
router.post("/register", apiLimiter, validateRegisterInput, register);
router.get("/logout", logout);

export default router;
