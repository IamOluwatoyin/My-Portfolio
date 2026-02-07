import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Components/Routes/Router.jsx'
import Aos from 'aos'
import "aos/dist/aos.css"


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
     <div className="fixed inset-0 flex items-center justify-center bg-amber-200 backdrop-blur-md z-50" data-aos="fade-right" >
  <h1 className="text-black text-5xl font-bold flex items-center justify-center animate-spin-scale">
    Torera<span className="text-yellow-500">Codes..</span>
  </h1>
</div>

    );
  }
  
  return <RouterProvider router={Router} />;
}
  

export default App
