import './App.css'
import Login from "./Components/Login.jsx"
import Agenda from "./Components/Agenda.jsx"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/agenda" element={<Agenda />}></Route>
      </Routes>
    </>
  )
}

export default App
