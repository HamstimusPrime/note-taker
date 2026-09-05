import express from "express";
import router from "./backend/routes/noteRoutes.js";

const app = express();

app.use("/api/notes", router);

app.listen("8080", () => {
  console.log("serever hit!!");
});
