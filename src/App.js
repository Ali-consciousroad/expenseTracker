// We can find the code transformed in JS in the chrome browser console 
// main.chunk.js (from line 43)

// Import our newly custom built component
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
    
  return (
    /* Our JSX code */
    <div>
      {/* A comment inside some JSX code */}
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <Expenses />
    </div>
  );
}

export default App;
