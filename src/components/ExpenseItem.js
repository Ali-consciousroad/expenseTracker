import './ExpenseItem.css';
// Our first custom component
/* In React we won't use many parameters like in regular JS, we'll use only one parameter named usually props
   that will store all our props/
   props will receive key value pair to precises.
*/
function ExpenseItem(props) {
  // By using props we can now take our data from outise our ExenseItem.js component 
  return (
    <div className="expense-item">
      <div>{props.date.toISOString}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
