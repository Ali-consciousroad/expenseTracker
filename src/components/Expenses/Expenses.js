import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    // console.log('Expenses.js');
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      {/* props needed because the used attributes are coming from the expenses
      array in the App.js file */}
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* We get rid of the hardcoded data to display the expense dynamically thanks to the map() method */}
        {props.items.map((expense) => ( 
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
