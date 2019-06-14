import React from "react";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
