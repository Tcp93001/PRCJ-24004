import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card"
import './Expenses.css'

function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map(expense => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      }
    </Card>
  )
}

export default Expenses