import "./ExpenseItems.css";
const ExpenseDetails = (props) => {
  return (
    <>
      <h2>{props.type}</h2>
      <h2>{props.location}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </>
  );
};

export default ExpenseDetails;
