import { useState } from "react";
import reduxLogo from "./assets/redux.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://redux.js.org/" target="_blank">
          <img src={reduxLogo} className="logo react" alt="Redux logo" />
        </a>
      </div>
      <h1>Redux з нуля</h1>
      <h2 style={{ margin: 0, marginBottom: "18px" }}>
        <a
          href="https://www.youtube.com/@SimpleFrontendUA"
          target="_blank"
          style={{ color: "#E464C1" }}
        >
          Простий Фронтенд
        </a>
      </h2>
      <div className="card">
        <button
          className="button"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
