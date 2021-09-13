import React from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// Our first custom component
/* In React we won't use many parameters like in regular JS, we'll use only one parameter named usually props
   that will store all our props/
   props will receive key value pair to precises.
*/
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      {/*<ExpenseDate></ExpenseDate>*/}
      {/* The component can be written like a self-closing tag if nothing inside it */}
      {/* Now that we have created a new <ExpenseDate /> component, 
      we need to add an attribute to the imported <ExpenseDate /> component we use here */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
