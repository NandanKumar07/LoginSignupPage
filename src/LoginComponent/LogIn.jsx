import React from "react";
import Button from "./Button";
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="border-2 border-gray-400 w-[400px] h-[400px] rounded-lg flex items-center justify-center pt-5">
        <form className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="your email"
            className="border-2 border-gray-400 w-[250px] py-2 px-2 rounded"
          ></input>
          <input
            type="password"
            placeholder="your password"
            className="border-2 border-gray-400 w-[250px] py-2 px-2 rounded"
          ></input>
          <Button name="Login" />
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
