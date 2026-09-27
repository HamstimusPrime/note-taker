import { Router } from "express";
import {getAllNotes, createNewNote, updateNote, deleteNote} from "../controllers/noteController.js";

const router = Router();

router.get("/", getAllNotes);

router.post("/", createNewNote)

router.put("/", updateNote);

router.delete("/", deleteNote);

export default router;
