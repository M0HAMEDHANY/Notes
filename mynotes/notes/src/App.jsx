import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import NoteList from "./pages/NoteList";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" eaxct Component={NoteList} />
          <Route path="/note/:id" Component={NotePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
