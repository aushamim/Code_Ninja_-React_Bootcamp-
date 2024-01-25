import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="container">
        <div className="display">{count}</div>
        <div>
          <div className="control">
            <button
              id="dec"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              Decrease
            </button>
            <button
              id="inc"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Increase
            </button>
          </div>
          <div className="control">
            <button
              id="res"
              onClick={() => {
                setCount(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
