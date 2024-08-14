import {
  UnauthenticatedError,
  UnauthorizedError,
} from "../errors/customError.js";

import { verifyJWT } from "../utils/tokenUtil.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.signedCookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid!");
  }

  try {
    const { userId, name } = verifyJWT(token);
    req.user = { userId, name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid!");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("not authorized to access this route");
    }
    next();
  };
};
