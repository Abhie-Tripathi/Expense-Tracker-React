import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import AddExpenses from "./AddExpenses";

const NewExpense = (props) => {
  const savedexpenses = (expenses) => {
    props.ongetexpenses(expenses);
  };
  const [show, setshow] = useState(true);

  const getisshowen = (value) => {
    setshow(value);
  };

  return (
    <div className="new-expense">
      {show == true ? (
        <AddExpenses isshowen={getisshowen} />
      ) : (
        <ExpenseForm isshowen={getisshowen} onsavedexpenses={savedexpenses} />
      )}
    </div>
  );
};

export default NewExpense;
