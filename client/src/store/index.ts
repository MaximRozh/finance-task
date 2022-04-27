import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import tickersReducer from "./ticker/reducer";

const rootReducer = combineReducers({
  tickersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
