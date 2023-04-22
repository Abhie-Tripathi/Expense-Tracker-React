import React from "react";
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
import "./ExpensesList.css"
import "./ExpenseItems.css"
import "./Expense.css"

const ExpensesList = (props) => {
    if (props.items.length == 0) return (<h2 className="expenses-list__fallback">Found No Expenses</h2>)



    return props.items.map((obj) => {
        return (<div className="expense-item" key={obj.id}>
            <ExpenseDate date={obj.date} />
            <ExpenseDetails type={obj.type} amount={obj.amount} location={obj.location} />
        </div>)

    })


}




export default ExpensesList