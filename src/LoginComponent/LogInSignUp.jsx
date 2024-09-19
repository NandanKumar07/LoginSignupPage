import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'


const LogInSignUp = () => {

    const navigate = useNavigate();

  return (
    <div className='min-h-screen flex flex-col items-center justify-center space-y-4'>
        <Button name = 'Login' onClick={() => navigate('/login')}/>
        <Button name = 'Signup' onClick={() => navigate('/signup')}/>
    </div>
  )
}

export default LogInSignUp