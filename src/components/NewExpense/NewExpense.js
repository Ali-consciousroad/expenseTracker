import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      // Not a perfect id, we could generate the same id twice
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    // Also close the form after being submitted 
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* We don't need to start with on... 
      We follow this convention just to make it clear 
      this props value should be a function */}
      {/* Don't call but point to the newly created function : saveExpenseDataHandler() */}
      {/* Show the buttong if isEditing is false */}
      {!isEditing && 
        <button onClick={startEditingHandler}>Add New Expense</button>
      }
      {/* Show the form if isEditing is true */}
      {isEditing && 
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      }
    </div>
  );
};

export default NewExpense;
