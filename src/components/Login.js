import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate'
import BackgroundImage from "../images/backgroundImage.jpg"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/Firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {
     let message = checkValidData(email.current.value, password.current.value)
     setErrorMessage(message)
     if(message) return;

     if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        setErrorMessage(errorCode + "-" + errorMessage)
      });
     }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage)
      });
     }
  }

  const toggleSignInForm = () => {
      setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
        <Header />
        <div className='absolute w-full'>
          <img src={BackgroundImage} alt='Logo' className='w-screen h-screen'/>
        </div>
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className='absolute border-2 w-4/12 my-28 mx-auto right-0 left-0 text-white px-7 border-none rounded-md bg-black bg-opacity-75'
        >
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
            ref={email}
            type='text' 
            placeholder='Your Email Address' 
            className='px-3 py-4 m-2 w-full rounded-md bg-gray-700 bg-opacity-65'
          />
          <input 
            ref={password}
            type='password' 
            placeholder='Your Password' 
            className='px-3 py-4 m-2 w-full rounded-md bg-gray-700 bg-opacity-65'
          />
          <p className='text-red-500 mx-2 font-bold'>{errorMessage}</p>
          <button className='font-bold mx-2 my-6 py-3 m-3 bg-red-600 w-full rounded-md' onClick={handleButtonClick}>
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