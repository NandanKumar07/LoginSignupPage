import React, {useState} from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="border-2 border-gray-400 w-[400px] h-[400px] rounded-lg flex items-center justify-center pt-5">
        <form className="flex flex-col items-center space-y-4">
          <input
            type="text"
            placeholder="your email"
            value={email}
            onChange={(e) => handleEmail(e)}
            className="border-2 border-gray-400 w-[250px] py-2 px-2 rounded"
          />
          <input
            type="password"
            placeholder="your password"
            value={password}
            onChange={(e) => handlePassword(e)}
            className="border-2 border-gray-400 w-[250px] py-2 px-2 rounded"
          />
          <Button name="Login" onClick={() => handleClick(e)} type = "submit"/>
        </form>
      </div>
      <div className="flex flex-row space-x-4 py-2">
        <p>Didn't have an account?</p>
        <Link to = "/signup" className="text-blue-500 underline">Sign Up</Link>
      </div>
    </div>
  );
};

export default LogIn;
