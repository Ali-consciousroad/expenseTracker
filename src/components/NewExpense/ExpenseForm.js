import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // We can have multiple state in a component
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  /* Instead of using multiple states, 
    we use here one state with one object */
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  // Vanilla JS
  // We automatically get an object event by listening to events
  // document.getElementById('').addEventListener('click', (event) => {})
  // The same is true here with React
  const titleChangeHandler = (event) => {
    console.log(event);
    // Names found in the console: This will display the input value
    console.log(event.target.value);

    // Store the value in our state
    // Used with multiple states
    // setEnteredTitle(event.target.value);

    // New way with one state
    // setUserInput({
    //   // We need to use the spread operator to keep track of the state of our other key pairs
    //   // otherwise their value will be lost
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    /* Whenever working with previous state, 
    here this is the right way to be sure we are working with the latest state snapshot. */
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          {/* Min and max date will be used for a filter later */}
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
