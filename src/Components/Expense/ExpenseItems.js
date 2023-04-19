
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
import "./ExpenseItems.css"
import "./Expense.css"
import React,{ useState } from "react"

const ExpenseItems = (props) => {
    const [amount, setamount] = useState(props.amount)

    const DeleteHandler=()=>{
        setamount(100)
    }
    return (
        <div className="expenses">
        <div className="expense-item">
            <ExpenseDate date ={props.date}/>
            <ExpenseDetails type = {props.type} amount = {amount} location = {props.location}/>
            <button onClick={DeleteHandler}>Change Expense</button>
        </div>
        </div>
    )
}

export default ExpenseItems