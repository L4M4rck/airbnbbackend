import jwt from "jsonwebtoken";
import { verifyToken } from "../helpers/jwt.js";
const SECRET_KEY = `${process.env.SECRET_KEY || "secret@123"}`;

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error("Please authenticate");
    }
    const decoded = verifyToken(token, SECRET_KEY);
    req.token = decoded;

    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
