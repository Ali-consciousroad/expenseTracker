import './ExpenseItem.css';
// Our first custom component
/* In React we won't use many parameters like in regular JS, we'll use only one parameter named usually props
   that will store all our props/
   props will receive key value pair to precises.
*/
function ExpenseItem(props) {
  // By using props we can now take our data from outise our ExenseItem.js component 
  // Good practice: To keep our code clean, we take out the logic from the JSX code
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
