
import Printivo from "./Components/Printivo/Printivo";
import React from 'react'
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <>

  
    <Routes>
      <Route path="/"  element={<Printivo/>}/>
    </Routes>

    </>
    
  )
}

export default App