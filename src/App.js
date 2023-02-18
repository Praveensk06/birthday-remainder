import React, { useState } from "react";
import "./index.css";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const leftItem = people.filter((people) => people.id !== id);

    setPeople(leftItem);
  };

  return (
    <div>
      <main className="main-container">
        <List people={people} removeFunction={removePerson} />
        <div className="clear-btn-container">
          <button
            className="clear-btn"
            type="button"
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
