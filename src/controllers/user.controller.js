import UserModel from "../models/user.schema.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { generateToken } from "../helpers/jwt.js";
const SECRET_KEY = `${process.env.SECRET_KEY || "secret@123"}`;

export const loginUser = async ({ body }, res) => {
  const user = await UserModel.findOne({ email: body.email });
  if (!user) return res.status(400).json("No existe el usuario.");
  const isMatch = await bcrypt.compare(body.password, user.password);
  if (!isMatch) return res.status(400).json("Credenciales incorrectas.");
  const {id, name} = user;
  const response = {
    id,
    name,
    token: generateToken({ id, name }, SECRET_KEY),
  };
  // response.token= generateToken(id, SECRET_KEY);
  return res.json(response);
};

export const registerUser = async ({ body }, res) => {
  const emailExist = await UserModel.find({ email: body.email });
  if (emailExist.length)
    return res.status(400).json("Ya hay un usuario con este email.");
  body.id = uuid();
  body.password = await bcrypt.hash(body.password, 10);
  return res.json(await UserModel.create(body));
};

export const toRent = (req, res) => {
  res.json('Rentando');
}