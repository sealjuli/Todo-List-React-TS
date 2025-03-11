import { legacy_createStore as createStore, combineReducers, Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

import { taskReducer } from "./reducers/taskReducer";
import { inputValueReducer } from "./reducers/inputValueReducer";
import { updatingValueReducer } from "./reducers/updatingValueReducer";

const rootReducer = combineReducers({
    taskReducer: taskReducer,
    inputValueReducer: inputValueReducer,
    updatingValueReducer: updatingValueReducer
});

export const store = createStore(rootReducer);

export type RootReducerType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;