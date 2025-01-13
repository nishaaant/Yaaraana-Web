import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const Login = () => {

    const [emailID , setEmailId] = useState("")
    const [password , setPassword] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const [error , setError] = useState("")
    const [isLogin , setIsLogin] = useState(true)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginFunc = async() => {
        try{
            const res = await axios.post(BASE_URL+"/login" , {
            emailID , password,
            },
            { withCredentials: true });
            dispatch(addUser(res.data))
            return navigate("/");
        }
        catch(err){
            setError(err?.response?.data || "Something went Wrong!")
            console.error(err)
        }
    }

    const handleSignupFunc = async() => {
        try{
            const res = await axios.post(BASE_URL+"/signup" , {
            emailID , password, firstName , lastName
            },
            { withCredentials: true });
            dispatch(addUser(res?.data?.data))
            return navigate("/profile");
        }
        catch(err){
            setError(err?.response?.data || "Something went Wrong!")
            console.error(err)
        }
    }

  return (
    <div className='flex justify-center my-20'>
        <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
    <h2 className="card-title justify-center">{isLogin ? "Login" : "Sign Up"}</h2>
    <div>
        {!isLogin && (<>
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text '>First Name</span>
        </div>
        <input
        type='text'
        value={firstName}
        className='input input-bordered w-full max-w-xs' 
        onChange={(e)=> setFirstName(e.target.value)}
        />
    </label>
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text '>Last Name</span>
        </div>
        <input
        type='text'
        value={lastName}
        className='input input-bordered w-full max-w-xs' 
        onChange={(e)=> setLastName(e.target.value)}
        />
    </label>
        </>)}
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text'>Email Id</span>
        </div>
        <input
        type='text'
        value={emailID}
        className='input input-bordered w-full max-w-xs' 
        onChange={(e)=> setEmailId(e.target.value)}
        />
    </label>
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text '>Password</span>
        </div>
        <input
        type='text'
        value={password}
        className='input input-bordered w-full max-w-xs' 
        onChange={(e)=> setPassword(e.target.value)}
        />
    </label>
    <p className='text-red-400'>{error}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mx-auto"
      onClick={isLogin ?  handleLoginFunc : handleSignupFunc }>
        {isLogin ? "Login" : "Sign Up"}
        </button>
    </div>
    <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLogin((value) => !value)}
          >
            {isLogin
              ? "New User? Signup Here"
              : "Existing User? Login Here"}
          </p>
  </div>
</div>
    </div>
  )
}

export default Login