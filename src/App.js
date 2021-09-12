// We can find the code transformed in JS in the chrome browser console 
// main.chunk.js (from line 43)

// Import our newly custom built component
import ExpenseItem from "./components/ExpenseItem";

function App() {
    // 4 objects added in our expenses array
    // expenses const given (udemy resource folder)
    const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
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

  return (
    /* Our JSX code */
    <div>
      {/* A comment inside some JSX code */}
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      {/* React makes the difference between custom built component and html tags thanks to the uppercase we need to use */}
      {/* Add attributes to our custom components */}
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
