import { useState } from "react"


function Remember() {
  const [counter, setCounter] = useState(0)


  function handleIncrement() {
    setCounter(counter + 1)
  }

  function handleDecrement() {
    setCounter(counter - 1)
  }

  function handleReset() {
    setCounter(0)
  }

  return (

    <div className="flex h-screen bg-[#202124] text-white font-mono text-md font-bold">
      <div className="m-auto mr-10  ">
        {users.map((user, index) => (
          <Componente
            primeiroNome={user.primeiroNome}
            segundoNome={user.segundoNome}
            isAdmin={user.isAdmin}
            key={index} />
        ))}
      </div>
      <div className="m-auto ml-10">
        <h1 className="m-1">Contador {counter}</h1>
        <Button handleAction={handleIncrement} buttonText="Incrementar"/>
        <Button handleAction={handleDecrement} buttonText="Decrementar"/>
        <Button handleAction={handleReset} buttonText="Reiniciar"/>
      </div>

    </div>
  )
}

const users = [
  {
    primeiroNome: 'Juan',
    segundoNome: 'Rodrigues',
    isAdmin: true
  },
  {
    primeiroNome: 'Mateus',
    segundoNome: 'Mendonça',
    isAdmin: false
  },
  {
    primeiroNome: 'Henrique',
    segundoNome: 'Panda',
    isAdmin: false
  }
]




interface ButtonProps {
  className?: string,
  handleAction: () => void,
  buttonText: button
}

type button = 'Incrementar' | 'Decrementar' | 'Reiniciar'

function Button(props: ButtonProps) {
  const { className, handleAction, buttonText } = props

  const Type = {
    Incrementar: 'bg-green-500',
    Decrementar: 'bg-red-500',
    Reiniciar: 'bg-blue-500'
  }

  return (

    <button
      className={`m-1 px-2 py-1  ${Type[buttonText]} ${className}`}
      onClick={handleAction}>
      {buttonText}

    </button>

  )

}

interface PropsUser {
  primeiroNome: string,
  segundoNome: string,
  isAdmin: boolean
}

function Componente(props: PropsUser) {
  const { primeiroNome, segundoNome, isAdmin } = props
  return (
    <>
      <div>
        <h1 className={`text-md font-bold ${isAdmin && 'text-green-500'}`}>
          {primeiroNome}&nbsp;{!isAdmin ? segundoNome : 'oculto'}
        </h1>
      </div>
    </>
  )
}


export default Remember