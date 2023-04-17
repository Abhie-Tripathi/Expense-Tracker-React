import "./ExpenseItems.css"


function ExpenseItems(props) {
    return (
        <div className="expense-item">
            <h2>{props.date}</h2>
            <h2>Location: {props.location}</h2>
            <h2>{props.type}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
    )
}

export default ExpenseItems