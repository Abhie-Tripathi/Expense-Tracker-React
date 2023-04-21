
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
import "./ExpenseItems.css"
import "./Expense.css"
import React,{ useState } from "react"
import ExpensesFilter from "./ExpenseFilter"

const ExpenseItems = (props) => {
    
    return (<>
        <div className="expenses">
        <ExpensesFilter/>
        
        {props.object.map(function(obj, i){
        return( <div className="expense-item">
        <ExpenseDate date ={obj.date}/>
        <ExpenseDetails type = {obj.type} amount = {obj.amount} location = {obj.location}/>
        </div> )})}
        </div>
        </>)}
            

            

            

export default ExpenseItems