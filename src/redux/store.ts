import { createStore, combineReducers } from "redux";

import { countReducer } from "./reducers/count-reducer";

export type StoreType = {
  countReducer: { count: number };
};

export const ourStore = createStore(combineReducers({ countReducer }));
