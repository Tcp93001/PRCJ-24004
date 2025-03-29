import { useState } from 'react'
import styled from 'styled-components'

// Hay que definir los componentes de Styled components fuera del
// del componente donde se van a usar. Esto es debido a que cada vez
// que hay un cambio en el estado del componente (cambia el valor de title, pe)
// entonces se renderiza un nuevo FormControl donde pierde el foco
// y no se puede escribir en el input de forma contínua

const FormControls = styled.div`
display: flex;
flex-wrap: wrap;
gap: 1rem;
margin-bottom: 1rem;
text-align: left;
`
const FormControl = styled.div`
& label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
  color: ${({invalid}) => (invalid ? '#ad0000' : '#000')}
}

& input {
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid ${({invalid}) => (invalid ? '#ad0000' : '#ccc')};
  width: 20rem;
  max-width: 100%;
}
`
const Button = styled.button`
font: inherit;
cursor: pointer;
padding: 0.5rem 1rem;
border: 1px solid #464646;
background-color: #464646;
color: #e5e5e5;
border-radius: 12px;
margin-right: 1rem;
width: 100%;

&:hover,
&:active {
  background-color: #afafaf;
  border-color: #afafaf;
  color: black;
}

@media (min-width: 768px) {
  width: auto;
}
`;

const FormActions = styled.div`
text-align: right;
`

export default function ExpenseForm({ onSaveExpense }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  // const [isValid, setIsValid] = useState(true)
  const [isTitleValid, setIsTitleValid] = useState(true)
  const [isAmountValid, setIsAmountValid] = useState(true)
  const [isDateValid, setIsDateValid] = useState(true)


  const titleInputHandler = (event) => {
    const { value } = event.target
    if (value.length > 0) setIsTitleValid(true)
    setTitle(value)
  }

  const amountInputHandler = (event) => {
    const { value } = event.target
    if (value.length > 0) setIsAmountValid(true)
    setAmount(value)
  }

  const dateInputHandler = (event) => {
    const { value } = event.target
    if (value.length > 0) setIsDateValid(true)
    setDate(value)
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

    validateFields()
    if (!(isTitleValid && isAmountValid && isDateValid)) return

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

  const validateFields = () => {
    if (title.trim().length === 0) {
      setIsTitleValid(false);
    }

    if (amount.trim().length === 0) {
      setIsAmountValid(false);
    }

    if (date.trim().length === 0) {
      setIsDateValid(false);
    }
  };


  return (
    <form onSubmit={submitHandler}>
      <FormControls>
        <FormControl invalid={!isTitleValid}>
          <label>Descripción</label>
          <input value={title} onChange={(event) => titleInputHandler(event)} type='text' />
        </FormControl>
        <FormControl invalid={!isAmountValid}>
          <label>Monto</label>
          <input value={amount} onChange={amountInputHandler} type='number' min='1' step='1' />
        </FormControl>
        <FormControl invalid={!isDateValid}>
          <label>Fecha</label>
          <input value={date} onChange={dateInputHandler} type='date' min='2019-01-01' max='2025-12-31' />
        </FormControl>
      </FormControls>
      <FormActions>
        <Button type='submit'>Agregar</Button>
      </FormActions>
    </form>
  )
}
