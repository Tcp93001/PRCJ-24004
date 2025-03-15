import { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm({ onSaveExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const titleInputHandler = (event) => {
    setTitle(event.target.value)
  }

  const amountInputHandler = (event) => {
    setAmount(event.target.value)
  }

  const dateInputHandler = (event) => {
    setDate(event.target.value)
  }

  // const [data, setData] = useState({
  //   title: '',
  //   amount: '',
  //   date: ''
  // })

  // const titleInputHandler = (event) => {
  //   setData((prevState) => ({
  //     ...prevState,
  //     title: event.target.value
  //   }))
  // }

  // const amountInputHandler = (event) => {
  //   setData((prevState) => ({
  //     ...prevState,
  //     amount: event.target.value
  //   }))
  // }

  // const dateInputHandler = (event) => {
  //   setData((prevState) => ({
  //     ...prevState,
  //     date: event.target.value
  //   }))
  // }

  // const submitHandler = (event) => {
  //   event.preventDefault()
  //   const expense = {
  //     title: data.title,
  //     amount: data.amount,
  //     date: data.date
  //   }

  //   console.log(expense)
  // }

  const submitHandler = (event) => {
    event.preventDefault()
    const expense = {
      title,
      amount,
      date: new Date(date)
    }

    onSaveExpense(expense)

    setTitle('')
    setAmount('')
    setDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense-controls'>
        <div className='new-expense-control'>
          <label>Descripción</label>
          <input value={title} onChange={titleInputHandler} type='text' />
        </div>
        <div className='new-expense-control'>
          <label>Monto</label>
          <input value={amount} onChange={amountInputHandler} type='number' min='1' step='1' />
        </div>
        <div className='new-expense-control'>
          <label>Fecha</label>
          <input value={date} onChange={dateInputHandler} type='date' min='2019-01-01' max='2025-12-31' />
        </div>
      </div>
      <div className='new-expense-actions'>
        <button type='submit'>Agregar</button>
      </div>
    </form>
  )
}
