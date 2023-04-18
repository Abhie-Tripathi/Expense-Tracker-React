
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
import "./ExpenseItems.css"
import "./Expense.css"
import React from "react"


const ExpenseItems = (props) => {
    const DeleteHandler=()=>{
        console.log("Delete Button Clicked")
    }
    return (
        <div className="expenses">
        <div className="expense-item">
            <ExpenseDate date ={props.date}/>
            <ExpenseDetails type = {props.type} amount = {props.amount} location = {props.location}/>
            <button onClick={DeleteHandler}>Delete Expense</button>
        </div>
        </div>
    )
}

export default ExpenseItems