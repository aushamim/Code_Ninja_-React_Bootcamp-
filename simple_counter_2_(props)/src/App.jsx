import { useState } from "react";
import "./App.css";
import BottomText from "./BottomText";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="container-custom">
        <div
          className="display"
          style={{
            color: count == 0 ? "#475569" : count > 0 ? "#22c55e" : "#ff482c",
          }}
        >
          {count}
        </div>
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
      <BottomText count={count} />
    </div>
  );
}

export default App;
