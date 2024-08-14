import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/passwordUtil.js";
import { createJWT } from "../utils/tokenUtil.js";
import { UnauthenticatedError } from "../errors/customError.js";

export const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User created successfully" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const validUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!validUser) throw new UnauthenticatedError("invalid credentials");

  const token = createJWT({ userId: user._id, name: user.firstName });
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
