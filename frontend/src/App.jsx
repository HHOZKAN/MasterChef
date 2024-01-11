import { useState } from 'react'
import './App.css'
import Cours from "../components/Cours"
import YourComponent from '../components/Cours'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    Hasan
    <YourComponent />
   </div>
  )
}

export default App