import ExpenseItems from "./Components/ExpenseItems";

for (let i = 0; i <= 100; i++) { }
function App() {
  let obj = {
    date: "13 March",
    location: "Prayagraj",
    amount: 12000,
    type: "Insurance"
  }
  return (

    <div>
      <h1>Expense Items</h1>
      {Array(100).fill(<ExpenseItems date={obj.date} location={obj.location} amount={obj.amount} type={obj.type} />)}
    </div>

  )
}


export default App;
