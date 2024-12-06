import './App.css'
import Login from "./Components/Login.jsx"
import Agenda from "./Components/Agenda.jsx"
import Orari from "./Components/Orari.jsx"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/agenda" element={<Agenda />}></Route>
        <Route path='/orari' element={<Orari />}></Route>
      </Routes>
    </>
  )
}

export default App
