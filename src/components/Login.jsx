import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'

const Login = () => {

    const [emailID , setEmailId] = useState("nishant@mail.com")
    const [password , setPassword] = useState("Nishant@123")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginFunc = async() => {
        try{
            const res = await axios.post(BASE_URL+"/login" , {
            emailID , password,
            },
            { withCredentials: true });
            dispatch(addUser(res.data))
            navigate("/");
        }
        catch(err){
            console.error(err)
        }
    }

  return (
    <div className='flex justify-center my-20'>
        <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div>
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
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mx-auto"
      onClick={handleLoginFunc}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login