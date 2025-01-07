import React, { useState } from 'react'
import FeedCard from "./FeedCard"
import axios from 'axios'
import {BASE_URL} from "../utils/constants"
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const EditProfile = ({user}) => {
    const [firstName , setFirstName] = useState(user.firstName)
    const [lastName , setLastName] = useState(user.lastName)
    const [age , setAge] = useState(user.age)
    const [gender , setGender] = useState(user.gender)
    const [photo , setPhoto] = useState(user.photo)
    const [about , setAbout] = useState(user.about)
    const [error, setError] = useState("")
    const [showToast, setShowToast] = useState(false)

    const dispatch = useDispatch();

    const editProfile = async() => {
        setError("")
        try
        {const res = await axios.patch(BASE_URL + "/profile/edit",
            {
                firstName,
                lastName,
                age,
                gender,
                photo,
                about,
            },
            {withCredentials : true})
            dispatch(addUser(res?.data?.data))
            setShowToast(true)
            setTimeout(() => {
                setShowToast(false)
            }, 3000);
        }
            catch(err){
                setError(err?.response?.data || "Something went Wrong!")
                console.error(err)
            }
    }

  return (
    <div className='flex justify-center gap-5 my-10'>
        <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
    <h2 className="card-title justify-center">Edit Profile</h2>
    <div>
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text'>First Name</span>
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
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text '>Age</span>
        </div>
        <input
        type='text'
        value={age}
        className='input input-bordered w-full max-w-xs' 
        onChange={(e)=> setAge(e.target.value)}
        />
    </label>
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text '>Gender</span>
        </div>
        <input
        type='text'
        value={gender}
        className='input input-bordered w-full max-w-xs' 
        onChange={(e)=> setGender(e.target.value)}
        />
    </label>
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text '>Photo URL</span>
        </div>
        <input
        type='text'
        value={photo}
        className='input input-bordered w-full max-w-xs' 
        onChange={(e)=> setPhoto(e.target.value)}
        />
    </label>
    <label className='form-control w-full max-w-xs p-4'>
        <div className='label'>
            <span className='label-text '>About</span>
        </div>
        <input
        type='text'
        value={about}
        className='input input-bordered w-full max-w-xs' 
        onChange={(e)=> setAbout(e.target.value)}
        />
    </label>
    <p className='text-red-400'>{error}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary mx-auto"
      onClick={editProfile}
      >Save Profile</button>
    </div>
  </div>
        </div>
        <div className='my-auto'>
            <FeedCard data = {{firstName , lastName , about , age , gender, photo}}/>
        </div>
        <div className="toast toast-top toast-center">
  {showToast && <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div>}
</div>
    </div>
  )
}

export default EditProfile