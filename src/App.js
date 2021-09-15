import React, { useState } from 'react';
// We can find the code transformed in JS in the chrome browser console 
// main.chunk.js (from line 43)

// Import our newly custom built component
// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

    // 4 objects added in our expenses array
    // expenses const given (udemy resource folder)

    const DUMMY_EXPENSES = [
      {
        id: 'e1',
        title: 'New Desk Chair',
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ];

    const App = () => {
      const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

      const addExpenseHandler = expense => {
        // Not the clean way 
        // setExpenses([expense, ...expenses]);
        // Clean way to update the state based on a older snapshot of the same state
        setExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        });
      };


  // Show what JSX does behind the scene
  // If we use React like this, we need to import React
  
  // return React.createElement(
  //   'div', 
  //   {}, 
  //   React.createElement('h2', {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
    
  // Same code written in JSX

  return (
    /* Our JSX code */
    <div>
      {/* A comment inside some JSX code */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <p>This is also visible</p>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
