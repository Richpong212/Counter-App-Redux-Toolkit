/* eslint-disable no-unused-vars */
// Part-4:
// Use store
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByValue, reset } from './counterSlice';

const Counter = () => {
  // do all the changes after this line
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // dispatch increment action
    dispatch(increment());
  };

  const handleDecrement = () => {
    // dispatch decrement action
    dispatch(decrement());
  };

  const handleIncrementByValue = () => {
    // dispatch incrementByValue action
    dispatch(incrementByValue(5));
  };

  const handleReset = () => {
    // dispatch reset action
    dispatch(reset());
  };

  // warning: do not edit in the JSX
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className="btn card__btn" onClick={handleIncrement}>
            +
          </button>
          <button
            className="btn card__btn"
            onClick={() => {
              handleIncrementByValue(5);
            }}>
            +5
          </button>
          <button className="btn card__btn" onClick={handleDecrement}>
            -
          </button>
          <button className="btn card__btn" onClick={handleReset}>
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
