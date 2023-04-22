import React from "react";

const AddExpenses = (props) => {
  return <button onClick={() => props.isshowen(false)}>Add Expenses</button>;
};

export default AddExpenses;
