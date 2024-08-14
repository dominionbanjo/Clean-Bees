import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import cloudinary from "cloudinary";
import { formatImage } from "../middleware/multerMiddleWare.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId }).select("-password");
  res.status(StatusCodes.OK).json({ user });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file, {
      use_filename: true,
      folder: "Images",
    });

    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updateUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
