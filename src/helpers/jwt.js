import jwt from "jsonwebtoken";

export const generateToken = (payload, secretKey) => {
  return jwt.sign(payload, secretKey, { expiresIn: "1h" });
};

export const verifyToken = (token, secretKey) => {
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return err;
    } else {
      return decoded;
    }
  });
};
