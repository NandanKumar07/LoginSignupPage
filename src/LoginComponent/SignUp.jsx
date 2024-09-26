import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleConfirmPassword = (e) => setConfirmPassword(e.target.value);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center border-2 w-[400px] h-[450px] p-5">
        <form className="flex flex-col space-y-4 w-full">
          <div className="flex justify-between items-center">
            <label htmlFor="username" className="w-1/3">
              Handle
            </label>
            <input
              id="username"
              type="text"
              placeholder="username"
              value={username}
              onChange={() => handleUsername(e)}
              className="border-2 px-2 py-1 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="email" className="w-1/3">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="type your email"
              value={email}
              onChange={() => handleEmail(e)}
              className="border-2 px-2 py-1 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="w-1/3">
              Enter Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="your password"
              value={password}
              onChange={() => handlePassword(e)}
              className="border-2 px-2 py-1 w-2/3"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="confirmPassword" className="w-1/3">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={() => handleConfirmPassword(e)}
              className="border-2 px-2 py-1 w-2/3"
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-4 py-2 px-4 rounded w-[360px]"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>

        <div className="flex flex-row space-x-4 py-2">
          <p>Already have an account?</p>
          <Link to="/login" className="text-blue-500 underline">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
