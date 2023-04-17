import "./ExpenseItems.css"
function ExpenseDetails(props) {

    return (<>
        <h2>{props.type}</h2>
        <h2>Location: {props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
    </>)
}

export default ExpenseDetails