import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./LoginComponent/LogIn";
import LogInSignUp from "./LoginComponent/LogInSignUp";
import SignUp from "./LoginComponent/SignUp";
import Button from "./LoginComponent/Button";



function App() {
  
  return (
    <>
      <h1 className="text-3xl font-bold font-Handjet ">To-Do App</h1>
      <Router>
        <Routes>
          <Route path="/" element = {<LogInSignUp />}/>
          <Route path="/login" element = {<LogIn />}/>
          <Route path="/signup" element = {<SignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
