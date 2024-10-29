import React, { useState } from 'react'
import Header from './Header'
import BackgroundImage from "../images/backgroundImage.jpg"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
        <Header />
        <div className='absolute w-full'>
          <img src={BackgroundImage} alt='Logo' className='w-screen h-screen'/>
        </div>
        <form className='absolute border-2 w-4/12 my-28 mx-auto right-0 left-0 text-white px-7 border-none rounded-md bg-black bg-opacity-75'>
          <h1 className='font-bold text-3xl py-6 px-2'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input 
             type='text' 
             placeholder='Full Name' 
             className='px-3 py-4 m-2 w-full rounded-md bg-gray-700 bg-opacity-65'
            />
          )}
          <input 
            type='text' 
            placeholder='Your Email Address' 
            className='px-3 py-4 m-2 w-full rounded-md bg-gray-700 bg-opacity-65'
          />
          <input 
            type='password' 
            placeholder='Your Password' 
            className='px-3 py-4 m-2 w-full rounded-md bg-gray-700 bg-opacity-65'
          />
          <button className='font-bold mx-2 my-6 py-3 m-3 bg-red-600 w-full rounded-md'>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className='px-3 my-3 font-semibold cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign up now" : "Already registered? Sign in now"}
          </p>
        </form>
    </div>
  )
}

export default Login