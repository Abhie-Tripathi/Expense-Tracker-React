
import "./ExpenseItems.css"
import "./Expense.css"
import React,{ useState } from "react"
import ExpensesFilter from "./ExpenseFilter"
import ExpensesList from "./ExpensesList"
import ExpenseChart from "./ExpensesChart"

const ExpenseItems = (props) => {
    const [filteredYear,setfilteredYear] = useState("2022")

    const getfilter = (value) =>{
        setfilteredYear(value)
    }
    
    const filtered = props.object.filter((obj)=>{
        return(obj.date.getFullYear().toString()===filteredYear)
    })

    
    
    
    return (<>
        <div className="expenses">
        <ExpensesFilter filter={getfilter} selectedYear={filteredYear}/>
        <ExpenseChart expenses={filtered}/>
        <ExpensesList items = {filtered}/>
        </div>
        </>)}
            

            

            

export default ExpenseItems