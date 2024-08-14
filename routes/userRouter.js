import { Router } from "express";
const router = Router();

import { getCurrentUser, updateUser } from "../controllers/userController.js";
import upload from "../middleware/multerMiddleWare.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";

router.get("/current-user", getCurrentUser);
router.patch(
  "/update-user",
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default router;
