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

  // Component logic
  
  /* Not a must do, but useful to add handler in the name of our function 
     so we know that this function react to an event and is not used elsewhere in our code */
  
  // Here we call the clickHandler function 
  // function clickHandler()   // Old JS syntax
  const clickHandler = () => {
    console.log('Clicked!!!');
  };

  // Component view
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
      <button onClick={(clickHandler)}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
