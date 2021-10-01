import React, { useState } from 'react';
// We can find the code transformed in JS in the chrome browser console 
// main.chunk.js (from line 43)
import { DUMMY_EXPENSES } from './shared/expenses';
// Import the needed components
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

    // 4 objects added in our expenses array
    // expenses const given (udemy resource folder)
    
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
