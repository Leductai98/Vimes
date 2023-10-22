import { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  useEffect(()=>{
    if(location.pathname==='/'){
      navigate("/receipt")
    }
   
  },[])
  return (
   <>
   <Outlet/>
   </>
  )
}

export default App
