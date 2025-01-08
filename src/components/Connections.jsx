import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { getConnection } from '../utils/connectionsSlice'

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections)

    const fetchConnections = async() => {

        try{
            const res = await axios.get(BASE_URL + "/user/connections",
             {withCredentials:true})
             dispatch(getConnection(res?.data?.data))
            }catch(err){
                console.error(err)
            }
    }

    useEffect(()=>{
        fetchConnections();
    },[])


  return connections && (
    <div>
    <div className="w-6/12 flex flex-col mx-auto gap-4 p-4">
        <h1 className='text-2xl font-bold'>Your Connections</h1>
      {connections.map((user, key) => (
        <div
          key={user._id}
          className="card card-side bg-base-200 shadow-md p-4 flex items-center"
        >
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={user.photo} alt={`${user.firstName}'s profile`} />
            </div>
          </div>
          <div>
          <div className="ml-4">
            <h2 className="card-title">{user.firstName +" "+ user.lastName}</h2>
          </div >
          <div className="ml-4">
            <h3>{user.about}</h3>
          </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Connections