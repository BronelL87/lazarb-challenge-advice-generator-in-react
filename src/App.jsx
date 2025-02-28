import { useState } from 'react'
import AdviceGen from './components/AdviceGen'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <AdviceGen/>
    </>
  )
}

export default App
