import { useState } from 'react'
import './App.css'
import Co from '../libs/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      Hello, <Co /> !
    </div>
  )
}

export default App
