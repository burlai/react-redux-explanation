import reduxLogo from "./assets/redux.svg";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "./redux/store";
import { CountActionType } from "./redux/reducers/count-reducer";
import SimpleComponent from "./components/simple-component";

function App() {
  const count = useSelector((state: StoreType) => state.countReducer.count);
  const dispatch = useDispatch();

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

      <SimpleComponent />
    </>
  );
}

export default App;
