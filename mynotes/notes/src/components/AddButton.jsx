import React from "react";
import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to={"/note/new/"} className="add-button">
      Add Note
    </Link>
  );
};

export default AddButton;
