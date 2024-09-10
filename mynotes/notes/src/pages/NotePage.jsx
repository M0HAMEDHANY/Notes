import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const NotePage = () => {
  let { id } = useParams();
  let [note, setNote] = useState(null);
  let navigate = useNavigate();
  let [csrfToken, setCsrfToken] = useState(null);


  useEffect(() => {
    if (id) {
      getNote();
    }
    fetchCsrfToken();
  }, [id]);

  const fetchCsrfToken = async () => {
    try {
      const response = await fetch("/api/csrf-token/");
      const data = await response.json();
      setCsrfToken(data.csrfToken);
    } catch (error) {
      console.error("Error fetching CSRF token:", error);
    }
  };

  const getNote = async () => {
    try {
      const response = await fetch(`/api/notes/${id}/`);
      if (response.ok) {
        const data = await response.json();
        setNote(data);
      } else {
        console.error("Failed to fetch note");
      }
    } catch (error) {
      console.error("Error fetching note:", error);
    }
  };

  const updateNote = async () => {
    try {
      const response = await fetch(`/api/notes/${id}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify(note),
      });
      if (response.ok) {
        const updatedNote = await response.json();
        setNote(updatedNote);
      }
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  const createNote = async () => {
    try {
      const response = await fetch(`/api/notes/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify({ ...note, updated: new Date() }),
      });
      if (response.ok) {
        const newNote = await response.json();
        setNote(newNote);
      }
    } catch (error) {
      console.error("Error creating note:", error);
    }
  };

  const deleteNote = async () => {
    try {
      await fetch(`/api/notes/${id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken,
        },
        body: JSON.stringify(note),
      });
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const handleSubmit = async () => {
    if (id !== "new" && !note.body) {
      await deleteNote();
    } else if (id !== "new") {
      await updateNote();
    } else if (id === "new" && note !== null) {
      await createNote();
    }
    navigate("/");
  };

  return (
    <>
      <div className="note-page">
        <div className="note-page-header">
          <Link className="back-button" onClick={handleSubmit}>
            Back
          </Link>
        </div>
        <div className="focus-note">
          <textarea
            onChange={(e) => setNote({ ...note, body: e.target.value })}
            value={note?.body || ""}
            placeholder="Enter your note here..."
          />
          {id !== "new" ? (
            <button
              className="delete-button"
              onClick={async () => {
                await deleteNote();
                navigate("/");
              }}
            >
              Delete
            </button>
          ) : (
            <button className="done-button" onClick={handleSubmit} >
              Done
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default NotePage;
