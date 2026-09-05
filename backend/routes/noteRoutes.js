import { Router  } from "express";


const router = Router()

router.get("/", (req, res) => {
  res.status(200).send("you have a bunch of notes");
  return;
})

router.post("/", (req, res) => {
  console.log("POST endpoint reached");
  res.status(200).json({ message: "note created successfully" });
})

router.put("/", (req, res) => {
  const {id} = req.params
  console.log(`POST endpoint reached ${id}`);
  res.status(200).json({ message: "note updated successfully" });
})

router.delete("/", (req, res) => {
  const {id} = req.params
  console.log(`POST endpoint reached ${id}`);
  res.status(200).json({ message: "note deleted successfully" });
})

export default router
