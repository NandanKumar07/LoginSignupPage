import React from 'react'
import ProfilePic from '../assets/pookie.jpg'

const Card = () => {
  return (
    <div className='border-2 h-[240px] w-[200px] flex flex-col items-center text-center inline-block p-2 m-4 rounded-lg shadow-[3px_3px_0px_rgba(255,0,0,0.5)]'>
        <img src={ProfilePic} alt = "My Profile Picture" className='h-[150px] w-[150px] rounded-full mb-2'></img>
        <h1 className='font-bold text-lg text-pink-400'>Pookie Kumar</h1>
        <p>I am just a boy 🎀</p>
    </div>
  )
}

export default Card