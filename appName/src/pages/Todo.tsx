import { useState } from "react"
import { isModuleNamespaceObject } from "util/types"
import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit, AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai"

function Todo() {
  const [inputText, setInputText] = useState<string>('')
  const [auxText,setAuxText] = useState<string>('')
  const [todoList, setTodolist] = useState<Itodolist[]>([])
  const [selectedTodo, setSelectedTodo] = useState<Itodolist | null>(null)
  const [actionText, setActionText] = useState<'nova tarefa' | 'editar tarefa'>('nova tarefa')
  const [isCreating, setIsCreating] = useState<boolean>(true)


  interface Itodolist {
    id: number,
    name: string,
    done: boolean
  }

  function handleCreate() {
    if (inputText !== "") {
      setTodolist([
        ...todoList,
        {
          id: todoList.length + 1,
          name: inputText,
          done: false
        }
      ])
      document.getElementById("inputtask").value = ""
    }

  }

  function handleDelete(todoID: number) {
    setTodolist(todoList.filter((t) => t.id !== todoID))
  }

  function handleComplete(todo: Itodolist) {
    setTodolist(
      todoList.map((t) => {
        if (t.id === todo.id) return { ...t, done: !todo.done }
        return t
      })
    )
  }

  function handleEdit() {

    if (selectedTodo != null) {
      setTodolist(
        todoList.map((t) => {
          if (t.id === selectedTodo.id) return { ...t, name: inputText }
          return t
        })
      )
    }
    setInputText('')
    setSelectedTodo(null)
    setActionText('nova tarefa')
    setIsCreating(true)

    document.getElementById("inputtask").value = ''
   
  }


  return (
    <div className="flex h-screen bg-[#202124] text-white font-mono text-md font-bold">
      <div className="m-auto">
        <p className="text-center my-5 text-xl">
          ToDo
        </p>
        <div className="flex space-x-3 text-black">

          <input
            id="inputtask"
            onChange={(e) => setInputText(e.target.value)}
            placeholder="task"
            type="text"
          />
          {isCreating ?
            <button className="px-1 bg-green-500" onClick={handleCreate}>Adicionar</button> :
            <button className="px-1 bg-red-500" onClick={handleEdit}>Atualizar</button>}
        </div>

        <p>
          {actionText}: <span className={actionText === "nova tarefa" ? "text-green-500" : "text-red-500"}> {actionText === "nova tarefa" ?inputText:auxText} </span>
          {todoList.map((todo, index) =>
            <div
              className="border-2 flex space-x-4 border-green-500 rounded my-1 px-1"
              key={index}>
              <p>{todo.name}</p>
              <button id={"Completo" + index} onClick={() => handleComplete(todo)}>{todo.done ? <AiFillCheckSquare /> : <AiOutlineCheckSquare />}</button>
              <button id={"Editar" + index} onClick={() => {
                setInputText(todo.name)
                setAuxText(todo.name)
                setSelectedTodo(todo)
                setIsCreating(false)
                setActionText("editar tarefa")
              }}><AiFillEdit /></button>
              <button id={"Excluir" + index} onClick={() => handleDelete(todo.id)}><BsFillTrashFill /></button>
            </div>
          )}
        </p>
      </div>
    </div>
  )
}

export default Todo