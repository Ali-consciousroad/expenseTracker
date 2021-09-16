import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./ExpenseForm.css";

// Now that we have added a JSX attribute to the expenseForm that point to saveExpenseDataHandler (NewExpense.js page), 
// We can use props here
const ExpenseForm = (props) => {
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
    // console.log(event);
    // Names found in the console: This will display the input value
    // console.log(event.target.value);

    // Store the value in our state
    // Used with multiple states
    setEnteredTitle(event.target.value);

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
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

    const submitHandler = (event) => {
      /* Because of the onSubmit() added on the form, we need to prevent the default JS behavior 
      that cause the whole page to refresh by clicking on the add expense button */
      event.preventDefault();
      
      // Object needed to clear the field after writting the inputs  
      const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
      };
      // console.log(expenseData);
      // Here we ask the function to be executed
      props.onSaveExpenseData(expenseData);
      // Clear the input field after completing the form
      setEnteredTitle('');
      setEnteredAmount('');
      setEnteredDate('');
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text"
            value={enteredTitle}  
            onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
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
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
