import Redux from "redux";
import { rootReducer } from "./rootReducer";

export const store = Redux.createStore(rootReducer);

store.subscribe(() => console.log(store.getState()))