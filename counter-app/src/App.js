import { useState } from "react";
import "./App.css"; // Importing CSS for styling

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p className="count">{count}</p>
      <div className="buttons">
        <button className="btn increase" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="btn decrease" onClick={() => setCount(count - 1)}>Decrease</button>
        <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;