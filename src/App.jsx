import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Components/Routes/Router.jsx'
import Aos from 'aos'
import "aos/dist/aos.css"
import { FaSpinner } from "react-icons/fa6";

const App = () => {
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    Aos.init({duration:1000, once:false})

     const timer = setTimeout(()=>{
    setLoading(false)
  },2000)
return ()=> clearTimeout(timer)

  },[])

 


  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-amber-200 backdrop:backdrop-blur-md z-50">
        <div className="text-white text-2xl animate-pulse">
          <FaSpinner className='text-6xl' />
        </div>
      </div>
    );
  }
  
  return <RouterProvider router={Router} />;
}
  

export default App
