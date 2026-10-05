import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const API = "http://localhost:5000/api/notes";

    // Get notes
    const getNotes = async () => {
        const response = await fetch(API);
        const data = await response.json();

        setNotes(data);
    };

    useEffect(() => {
        getNotes();
    }, []);

    // Add note
    const addNote = async (e) => {
        e.preventDefault();

        if (!title || !content) {
            return;
        }

        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title,
                content
            })
        });

        const newNote = await response.json();

        setNotes([...notes, newNote]);

        setTitle("");
        setContent("");
    };

    // Delete note
    const deleteNote = async (id) => {
        await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        setNotes(notes.filter(note => note.id !== id));
    };

    return (
        <div className="container">

            <h1>My Notes</h1>

            <form onSubmit={addNote}>
                <input
                    type="text"
                    placeholder="Note title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    placeholder="Write your note..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

                <button type="submit">
                    Add Note
                </button>
            </form>

            <div className="notes">

                {notes.map((note) => (
                    <div className="note" key={note.id}>

                        <h2>{note.title}</h2>

                        <p>{note.content}</p>

                        <button onClick={() => deleteNote(note.id)}>
                            Delete
                        </button>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default App;