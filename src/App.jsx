
import Printivo from "./Components/Printivo/Printivo";

import Printshop from './Components/Printivo/Printshop';
import { Printivoimg } from './Components/Printivo/Printivoimg';
import Printivofeedback from './Components/Printivo/Printivofeedback';
import Api from './Components/Api'

import React from 'react'
import { Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signup/Signin";
import Navbar from "./Components/Signup/navbar";

function App() {
  return (
    <>
    
    {/* <Printivo  />
    <PrintivoCard />
    <Printshop/>
    <Printivoimg/>
    <Printivofeedback/> */}
    {/* <Api/> */}
    
    <Navbar/>
    <Routes>
      <Route path="/"  element={<Printivo/>}/>

    </Routes>



    </>
    
  )
}

export default App