import express from "express";
import router from "../routes/noteRoutes.js";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";



dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8080;
app.use("/api/notes", router);

app.listen(PORT, () => {
  console.log(`server starting on port: ${PORT}!!`);
});
