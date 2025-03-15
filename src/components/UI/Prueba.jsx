import { useState } from "react"

export default function Prueba({ imprimir }) {
  const [mensaje, setMensaje] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    console.log('impreso desde Prueba', mensaje)

    imprimir(mensaje)

    setMensaje('')
  }

  const imprimeEstoDeAqui = (event) => {
    setMensaje(event.target.value)
  }


  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Imprime esto</label>
        <input value={mensaje} onChange={imprimeEstoDeAqui} type='text' />
      </div>
      <div>
        <button type='submit'>Imprmir</button>
      </div>
    </form>
  )
}