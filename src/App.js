import ExpenseItems from "./Components/Expense/ExpenseItems";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";
import ExpensesFilter from "./Components/Expense/ExpenseFilter";

const App=() => {
  const [obj,newobj] = useState([{
    date: new Date(),
    location: "Prayagraj",
    amount: 12000,
    type: "Insurance"
  }])
  const getexpenses = (expenses) =>{
    newobj([...obj,expenses])
    console.log(obj)
  }
  
  return (

    <div>
      <NewExpense ongetexpenses={getexpenses}/>
      <ExpenseItems object = {obj} />;
      
    </div>
    

  )
}


export default App;
