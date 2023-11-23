import { Schema, model } from "mongoose";

const RoomSchema = new Schema(
  {
    id: { type: String },
    title: String,
    imgPath: String,
    description: String,
    price: String,
  },
  { timestamps: true }
);
const RoomModel = model("rooms", RoomSchema);
export default RoomModel;