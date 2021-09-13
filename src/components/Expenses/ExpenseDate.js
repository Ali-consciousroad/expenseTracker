import React from 'react';
import './ExpenseDate.css';
const ExpenseDate = (props) => {
    // By using props we can now take our data from outside our ExpenseItem.js component 
    // Good practice: To keep our code clean, we take out the logic from the JSX code
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;