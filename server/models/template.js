import mongoose from "mongoose";
const Schema = mongoose.Schema;

const defaultSchema = new Schema({
  title: String,
});

module.exports = Default = mongoose.model("default", defaultSchema);
