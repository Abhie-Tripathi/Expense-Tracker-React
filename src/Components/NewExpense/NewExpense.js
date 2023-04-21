import React from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
    const savedexpenses=(expenses)=>{
        props.ongetexpenses(expenses)
    }
    return(
        <div className="new-expense" >
            <ExpenseForm onsavedexpenses={savedexpenses}/>
        </div>
    )
}


export default NewExpense