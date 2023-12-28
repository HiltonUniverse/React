import { useState } from "react";

import "./App.css"

export default function App() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1)
    setCount((count) => count + 1)
  }

  function handleSub() {
    if (count <= 0) {
      return;
    }

    setCount(count - 1)
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className="add">ADD</button>
        <button onClick={handleSub} className="sub">SUB</button>
        {/* Using react arrow function */}
        <button onClick={() => { setCount(0) }} className="reset">RESET</button>
      </div>
    </div>
  )
}
