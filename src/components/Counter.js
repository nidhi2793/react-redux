import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const increamentHandler = () => {
    dispatch(counterActions.increment());
  };
  const decreamentHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increamentFiveHandler = () => {
    dispatch(counterActions.increase(5));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>

      {showCounter && <div className={classes.value}>{counter}</div>}

      <div>
        <button onClick={increamentHandler}>Increament</button>
        <button onClick={decreamentHandler}>Decrement</button>
        <button onClick={increamentFiveHandler}>Increase</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
