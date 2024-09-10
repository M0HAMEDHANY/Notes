import React, { useEffect } from "react";
import { useState } from "react";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";
const NoteList = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await fetch("/api/notes/");
      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  return (
    <div className="note-list">
      <div className="head-bar">
        <h1 className="note-list-header"> Notes List </h1>
        <AddButton />
      </div>
      <div className="note-list-notes">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteList;
