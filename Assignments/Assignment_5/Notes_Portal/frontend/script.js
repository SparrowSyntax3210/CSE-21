const Get_Notes = document.getElementById("get-notes");

Get_Notes.addEventListener("click", async () => {
  const response = await fetch("http://localhost:5000/api/notes");
  const data = await response.json();

  const notesList = document.getElementById("notes-list");

  notesList.innerHTML = "";

  data.forEach((note) => {
    notesList.innerHTML += `
      <div>
        <h2>${note.title}</h2>
        <p>${note.content}</p>
        <button onclick="deleteNote(${note.id})">Delete</button>
      </div>
      <hr>
    `;
  });
});

const Add_Note = document.getElementById("add-note");

Add_Note.addEventListener("click", () => {
  const addNoteDiv = document.getElementById("Add-Note");

  addNoteDiv.style.display = "block";
});

async function addNote() {
  const title = document.getElementById("note-title").value;
  const content = document.getElementById("note-content").value;

  const response = await fetch("http://localhost:5000/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      content: content,
    }),
  });

  const data = await response.json();

  console.log(data);

  document.getElementById("note-title").value = "";
  document.getElementById("note-content").value = "";

  document.getElementById("Add-Note").style.display = "none";

  // Refresh notes
  Get_Notes.click();
}

async function deleteNote(id) {
  await fetch(`http://localhost:5000/api/notes/${id}`, {
    method: "DELETE",
  });

  Get_Notes.click();
}
