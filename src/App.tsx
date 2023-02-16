import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
