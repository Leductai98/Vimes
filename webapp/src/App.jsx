import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  useEffect(()=>{
    navigate("/receipt")
  },[])
  return (
   <>
   <Outlet/>
   </>
  )
}

export default App
