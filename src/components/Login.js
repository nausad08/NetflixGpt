import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constant';


const Login = () => {

  const [isSignInForm , setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage]= useState(null);
  const dispatch = useDispatch()
  
  const name = useRef(null) ;
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{
    
    const msg = checkValidData(email.current.value,password.current.value);
    setErrorMessage(msg);

    if(msg) return; //means message not null

    if(!isSignInForm){
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
      .then((userCredential) => {
       // Signed up 
       const user = userCredential.user;

       updateProfile(user, {
          displayName: name.current.value,
           photoURL: USER_AVATAR
        }).then(() => {
          const {uid,email, displayName,photoURL} = auth.currentUser;
          // console.log(auth.currentUser);
          dispatch(
            addUser({
              uid: uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            }
          ) )
    
        }).catch((error) => {
         setErrorMessage(error.message)
        });
      
       })
      .catch((error) => {
       const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage+"-"+errorCode);
    });

    } else{
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       
       
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;

         setErrorMessage(errorMessage+"-"+errorCode);

      });

    }
  }

  const toggleSignInForm = () => {

    setIsSignInForm(!isSignInForm);

  }
  return (
    <div className=''> 
        <Header/>
        <div className='fixed ' >
            <img src={BG_URL} alt='bg-img' className=' h-screen object-cover md:w-screen md:h-[1000px] ' />

        </div>
        <form onSubmit={(e)=> e.preventDefault()} className ="w-full md:w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className='font-bold text-3xl py-4 my-4;'>
              {
                isSignInForm ? "Sign In ": "Sign Up"
              }
          </h1>
          {
             !isSignInForm && (
             <input 
             ref={name}
             type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-transparent border border-gray-400 rounded-md'/>)
          }
          <input
          ref={email}
          type='text' placeholder='Email or phone number' className='p-4 my-2 w-full bg-transparent border border-gray-400 rounded-md'/>
          <input 
          ref={password}
          type='password' placeholder='Password' className='p-4 my-2 w-full bg-transparent border border-gray-400 rounded-md'/>
          <p className='text-red-500'>{errorMessage}</p>
          <button 
             className='p-2 my-4 bg-red-600 text-white w-full rounded-md' onClick={handleButtonClick}>
              {
                isSignInForm ? "Sign In ": "Sign Up"

              }
              
          </button>

          <p className='text-center hover:underline'>Forget Password?</p>
          <div className='mt-20'>
            <input type='checkbox'/>
            <label>Remember me</label>
          </div>
          <p className='my-4 text-gray-400 cursor-pointer'>New to Netflix? <span className='text-white font-bold hover:underline' onClick={toggleSignInForm}>
            {
              isSignInForm ? "Sign Up Now" : "Sign In Now"
            }
            </span>
          </p>

          <p className='text-sm text-gray-400'>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-600 hover:underline'>Learn more.</span> 
          </p>

        </form>
    </div>
  )
}

export default Login
