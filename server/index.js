import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

//Launch App
const app = express();
const port = process.env.PORT || 5000;

//Configure Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React frontend app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Sucessfully connected to MongoDB Database");
});

//Establish API Routes
import apiRouter from "./routes/api.route.js";
app.use("/api", apiRouter);

// AFTER defining routes: Anything that doesn't match what's above, send back index.html;
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//Host Server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
