import React from "react";
import { ReactDOM } from "react-dom/client";
import Card from "./components/Card/Card";
import data from "./data.json";
const App = () => {
  return (
    <div>
      <h1 className="headingTodo">Todo App</h1>
      <div className="card-container">
        {data.map((item, id) => (
          <Card key={id} title={item.title} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default App;
