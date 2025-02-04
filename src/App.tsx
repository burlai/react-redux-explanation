import reduxLogo from "./assets/redux.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "./redux/store";
import { CountActionType } from "./redux/reducers/count-reducer";
import SimpleComponent from "./components/simple-component";
import { useState } from "react";
import { ToggleThemeActionType } from "./redux/reducers/theme-reducer";

function App() {
  const [changeCountBy, setChangeCountBy] = useState(0);

  const count = useSelector((state: StoreType) => state.countReducer.count);
  const theme = useSelector((state: StoreType) => state.themeReducer.theme);
  const dispatch = useDispatch();

  return (
    <main className={`main-${theme}`}>
      <div className="mb-12 pt-12">
        <label htmlFor="theme-toggle">Тема:</label>
        <input
          type="checkbox"
          id="theme-toggle"
          onChange={() => {
            dispatch({ type: ToggleThemeActionType.TOGGLE_THEME });
          }}
        />
      </div>

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
        <div className="mb-12">Count is: {count}</div>
        <button
          className="button mr-12"
          onClick={() => {
            dispatch({ type: CountActionType.INCREMENT });
          }}
        >
          Плюс один
        </button>
        <button
          className="button"
          onClick={() => {
            dispatch({ type: CountActionType.DECREMENT });
          }}
        >
          Мінус один
        </button>
      </div>

      <div className="card">
        <div className="mb-12">
          <input
            type="number"
            value={changeCountBy}
            onChange={(e) => setChangeCountBy(Number(e.target.value))}
          />
        </div>
        <button
          className="button mr-12"
          onClick={() => {
            dispatch({
              type: CountActionType.INCREASE_BY,
              value: changeCountBy,
            });
          }}
        >
          Плюс {changeCountBy}
        </button>
        <button
          className="button"
          onClick={() => {
            dispatch({
              type: CountActionType.DECREASE_BY,
              value: changeCountBy,
            });
          }}
        >
          Мінус {changeCountBy}
        </button>
      </div>

      <SimpleComponent />
    </main>
  );
}

export default App;
