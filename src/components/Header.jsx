import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showForm, numOfElements, clearAllTasks }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showForm ? "red" : "green"}
        text={showForm ? "Close" : "Add"}
        onClick={onAdd}
      />
      <Button
        onClick={clearAllTasks}
        text={numOfElements() > 0 ? "Clear All" : "Nothing to clear"}
      />
    </header>
  );
};

export default Header;
