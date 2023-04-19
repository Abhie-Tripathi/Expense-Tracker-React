import React,{useState} from "react";
import "./ExpenseForm.css"

const ExpenseForm = () => {
    const [enteredtitle,setenteredtitle] = useState("")
    const titlechangehandler = (e) =>{
        setenteredtitle(e.target.value)
    }
    const [enteredamount,setenteredamount] = useState("")
    const amountchangehandler = (e) =>{
        setenteredamount(e.target.value)
    }
    const [enteredlocation,setenteredlocation] = useState("")
    const locationchangehandler = (e) =>{
        setenteredlocation(e.target.value)
    }
    const [entereddate,setentereddate] = useState("")
    const datechangehandler = (e) =>{
        setentereddate(e.target.value)
    }

    return(<form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titlechangehandler}/>
            </div>
            <div className="new-expense__control">
                <label>location</label>
                <input type="text" onChange={locationchangehandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={datechangehandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountchangehandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>

            </div>

        </div>
        </form>
    
    )
}

export default ExpenseForm