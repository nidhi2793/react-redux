import redux from "redux";
import { legacy_createStore as createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  if (action.type === "incrementByFive") {
    return {
      counter: state.counter + 5,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
