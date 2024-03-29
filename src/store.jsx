import { createStore } from "redux";
import reducers from "./reducers/reducers";

const store = createStore(reducers);

store.subscribe(() => {
  console.log(store.getState().barrel);
});

export default store;
