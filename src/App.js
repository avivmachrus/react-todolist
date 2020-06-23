import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn">Add</button>
          <h1 className="header-title">Todo Lists</h1>
          <button className="header-btn main-red-color">Clear</button>
        </section>

        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input"></input>
            <button className="add-btn">Add</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
