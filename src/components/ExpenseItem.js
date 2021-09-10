import './ExpenseItem.css';
// Our first custom component
function ExpenseItem() {
    /* We add here fake data our app will use dynamically
    cause we don't want to use hardcoded data */
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Bike insurance';
    const expenseAmount = 99;
  // The parenthesis are not mandatory here
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString}</div>
      <div className="expense-item__description">
        <h2>{/* Dynamic value */ expenseTitle}{/*Hardcoded value: Bike insurance*/}</h2>
        <div className="expense-item__price">{expenseAmount}€</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
