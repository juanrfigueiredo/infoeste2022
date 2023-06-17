import { useEffect, useState } from "react"

function CompMount() {
  const [hidden,setHidden] = useState<boolean>(false)
  const [hidden2,setHidden2] = useState<boolean>(false)

  useEffect(()=>{
    console.log("Componente Montado")
    return()=>console.log("Componente Desmontado")
  })

  useEffect(()=>{
    console.log('Componente Montado')
  })

  function handleHidden(){
    setHidden(!hidden)
  }

  function handleHidden2(){
    setHidden2(!hidden2)
  }

  return (
    <div className="flex h-screen bg-[#202124] text-white font-mono text-md font-bold">
      <div className="m-auto">
        {!hidden && <p className="my-5 ml-1">Texto 1</p>}
        {!hidden2 && <p className="my-5 ml-1">Texto 2</p>}
        <div className="m-auto">
          <button className="bg-blue-500 p-1 mx-1" onClick={handleHidden}>{!hidden?"Hide 1":"Show 1"}</button>
          <button className="bg-blue-500 p-1 mx-1" onClick={handleHidden2}>{!hidden2?"Hide 2":"Show 2"}</button>
        </div>
      </div>
    </div>
  )
}

export default CompMount