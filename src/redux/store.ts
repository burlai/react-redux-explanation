import { createStore, combineReducers } from "redux";

import { countReducer } from "./reducers/count-reducer";
import { themeReducer } from "./reducers/theme-reducer";

export type StoreType = {
  countReducer: { count: number };
  themeReducer: { theme: string };
};

export const ourStore = createStore(
  combineReducers({ countReducer, themeReducer })
);
