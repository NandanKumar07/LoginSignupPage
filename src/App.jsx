import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./LoginComponent/LogIn";
import LogInSignUp from "./LoginComponent/LogInSignUp";
import SignUp from "./LoginComponent/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<LogInSignUp />}/>
        <Route path="/login" element = {<LogIn />}/>
        <Route path="/signup" element = {<SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App;
