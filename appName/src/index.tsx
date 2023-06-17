import { createRoot } from 'react-dom/client'
import './assets/global.css'
import FetchAPI from 'pages/FetchAPI'
import Introducao from 'pages/Introducao'
import Todo from 'pages/Todo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
import CompMount from 'pages/CompMount'
import { Link } from 'react-router-dom'
import Form from 'pages/Form'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)


root.render(
    <Router>
        <div className='bg-blue-200'>
        <div className="py-5 flex justify-center font-bold font-mono">
            <Link to="/"><button className="px-5">Home</button></Link>
            <Link to="/Introducao"><button className="px-5">Introducao</button></Link>
            <Link to="/ToDo"><button className="px-5">ToDo</button></Link>
            <Link to="/FetchAPI"><button className="px-5">FetchAPI</button></Link>
            <Link to="/CompMount"><button className="px-5">CompMount</button></Link>
            <Link to="/Form"><button className="px-5">Form</button></Link>
        </div>
        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Introducao' element={<Introducao />} />
            <Route path='/ToDo' element={<Todo />} />
            <Route path='/FetchAPI' element={<FetchAPI />} />
            <Route path='/CompMount' element={<CompMount />} />
            <Route path='/Form' element={<Form />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </Router>
)
