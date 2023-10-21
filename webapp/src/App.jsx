import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Outlet/>
   </>
  )
}

export default App
