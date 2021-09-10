import './ExpenseItem.css';
// Our first custom component
function ExpenseItem() {
  // The parenthesis are not mandatory here
  return (
    <div className="expense-item">
      <div>March 21th 2021</div>
      <div className="expense-item__description">
        <h2>Bike insurance</h2>
        <div className="expense-item__price">99€</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
