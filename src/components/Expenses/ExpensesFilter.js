import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    /* We'll get the "event" object we can use as parameter
    This is working exactly like the other inputs we've seen */
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
    };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* We want to listen to changes made on this select element 
        because this is the element that will emit a change event 
        when a change is made on this dropdown */}
        {/* Point at the handler just created */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
