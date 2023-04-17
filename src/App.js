import ExpenseItems from "./Components/ExpenseItems";

function App() {
  let obj = [{
    date: new Date(),
    location: "Prayagraj",
    amount: 12000,
    type: "Insurance"
  }]
  return (

    <div>
      <h1>Expense Items</h1>
      <ExpenseItems date={obj[0].date} location={obj[0].location} amount={obj[0].amount} type={obj[0].type} />
    </div>

  )
}


export default App;
