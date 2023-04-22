
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
import "./ExpenseItems.css"
import "./Expense.css"
import React,{ useState } from "react"
import ExpensesFilter from "./ExpenseFilter"

const ExpenseItems = (props) => {
    const [filteredYear,setfilteredYear] = useState("2022")

    const getfilter = (value) =>{
        setfilteredYear(value)
    }
    
    const filtered = props.object.filter((obj)=>{
        return(obj.date.getFullYear().toString()===filteredYear)
    })

    let anyfiltered = <p id="anyfiltered">No Item Found</p>
    if(filtered.length>0 ){
        anyfiltered = filtered.map(function(obj){
            return( <><div className="expense-item" key={obj.id}>
            <ExpenseDate date ={obj.date}/>
            <ExpenseDetails type = {obj.type} amount = {obj.amount} location = {obj.location}/>
            </div> 
            {filtered.length===1 ? (<p id="anyfiltered">Add More Expenses</p>):(<></>)}
            </>
            )})
    }
    
    return (<>
        <div className="expenses">
        <ExpensesFilter filter={getfilter} selectedYear={filteredYear}/>
        {anyfiltered}
        </div>
        </>)}
            

            

            

export default ExpenseItems