import React from "react";

function App() {
  const [add, addItem] = React.useState("");
  const [items, setItems] = React.useState([]);
  function handle(event) {
    const value = event.target.value;
    addItem(value);
  }
  function hadleIt() {
    setItems((prevValue) => {
      console.log(items);
      return [...prevValue, add];
    });
    addItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handle} value={add} />
        <button onClick={hadleIt}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
