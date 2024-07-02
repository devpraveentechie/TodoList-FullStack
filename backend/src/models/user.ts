import { model, Schema } from "mongoose";
import { User } from "../types/user";
const userSchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    birthdate: {
      type: String,
      allowNull: true,
    },
    country: {
      type: String,
      allowNull: true,
    },
  },
  { timestamps: true }
);
export default model<User>("User", userSchema);
