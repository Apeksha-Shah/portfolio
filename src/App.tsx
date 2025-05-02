import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-white">
      <h1 className="text-3xl font-bold text-black px-4 py-2 rounded">
        Hello world!
      </h1>
    </div>

    </>
  )
}

export default App
