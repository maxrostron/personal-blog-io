import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  isVerified: { type: Boolean, default: false },
});

const User = mongoose.model("User", UserSchema);

export default User;
