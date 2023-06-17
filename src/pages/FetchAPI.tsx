import { useEffect, useState } from "react"
import { isModuleNamespaceObject } from "util/types"
import { BsFillTrashFill } from "react-icons/bs"
import { AiFillEdit, AiOutlineCheckSquare, AiFillCheckSquare } from "react-icons/ai"
import Axios from "axios"

interface IGitHubProfile{
  avatar_url: string,
  login: string,
  html_url: string
}

export default function App() {
  const [gitHubProfile,setGitHubProfile] = useState<IGitHubProfile | null>(null);
  
  /*
  fetch('https://api.github.com/users/juanrfigueiredo')
    .then((res) => res.json())
    .then((data) => console.log(data))

  Axios.get('https://api.github.com/users/juanrfigueiredo')
  .then((res) => console.log(res.data))
  */

  useEffect(() =>{
    const getData = async () =>{
      const res = await  Axios.get('https://api.github.com/users/juanrfigueiredo')
      setGitHubProfile(res.data)
      console.log(gitHubProfile)
    }
    getData()
  },[])

  return (
    <div className="flex h-screen bg-[#202124] text-white font-mono text-md font-bold">
      <div className="m-auto">
        <p>
        <img src={gitHubProfile?.avatar_url} width={200} height={200}></img>
        <p>{gitHubProfile?.login}</p>
        <a href={gitHubProfile?.html_url} className="text-blue-200">GitHub</a>
        </p>
      </div>
    </div>
  )
}

