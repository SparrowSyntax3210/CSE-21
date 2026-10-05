const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../frontend")));

let notes = [];
let id = 1;

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// Create note
app.post("/api/notes", (req, res) => {
  const { title, content } = req.body;

  const note = {
    id: id++,
    title,
    content,
  };

  notes.push(note);

  res.status(201).json(note);
});

// Delete note
app.delete("/api/notes/:id", (req, res) => {
  const noteId = Number(req.params.id);

  notes = notes.filter((note) => note.id !== noteId);

  res.json({ message: "Note deleted" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
