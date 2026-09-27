export function getAllNotes(req, res) {
  res.status(200).send("you have fetched all notes");
  return;
}

export function createNewNote(req, res) {
  console.log("POST endpoint reached");
  res.status(200).json({ message: "note created successfully" });
}

export function updateNote(req, res) {
  const { id } = req.params;
  console.log(`POST endpoint reached ${id}`);
  res.status(200).json({ message: "note updated successfully" });
}

export function deleteNote(req, res)  {
  const { id } = req.params;
  console.log(`POST endpoint reached ${id}`);
  res.status(200).json({ message: "note deleted successfully" });
}
