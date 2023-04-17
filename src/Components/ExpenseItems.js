import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
import "./ExpenseItems.css"


function ExpenseItems(props) {
    return (
        <div className="expense-item">
            <ExpenseDate date ={props.date}/>
            <ExpenseDetails type = {props.type} amount = {props.amount} location = {props.location}/>
        </div>
    )
}

export default ExpenseItems