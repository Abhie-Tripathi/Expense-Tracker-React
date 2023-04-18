
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
import "./ExpenseItems.css"
import "./Expense.css"
import React from "react"


const ExpenseItems = (props) => {
    return (
        <div className="expenses">
        <div className="expense-item">
            <ExpenseDate date ={props.date}/>
            <ExpenseDetails type = {props.type} amount = {props.amount} location = {props.location}/>
        </div>
        </div>
    )
}

export default ExpenseItems