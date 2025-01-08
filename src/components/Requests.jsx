import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { getRequests, removeRequest } from '../utils/requestsSlice'

const Requests = () => {

    const dispatch = useDispatch();
    const requests = useSelector((store)=> store.requests)

    const handleReview = async(status , _id) => {
      try{
      const res = await axios.post(BASE_URL + "/request/review/" +status+"/"+_id ,{},{withCredentials: true})
      dispatch(removeRequest(_id))
    }
      catch(err){
        console.error(err)
      }
    }

    const fetchRequests = async() => {
        try{const res = await axios.get(BASE_URL + "/user/requests/received",
            {withCredentials : true})
            dispatch(getRequests(res?.data?.data))
            console.log(res?.data?.data)}
            catch(err){
              console.error(err)
            }
    }

    useEffect(()=> {
        fetchRequests();
    },[])

    if(!requests)return;
    if(requests.length == 0) return <h1>No Request Found</h1>
  

  return(
    
    <div className="flex flex-col gap-4 p-4">
      {requests.map((user, key) => (
        <div
        key={user._id}
        className="card card-side bg-base-100 shadow-md p-4 flex items-center justify-between"
        >
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src={user.fromUserId.photo} alt={`${user.name}'s profile`} />
              </div>
            </div>
            <div className='flex gap'>
            <div className="ml-4">
              <h2 className="card-title">{user.fromUserId.firstName}</h2>
              <h3>{user.fromUserId.about}</h3>
            </div>
              <h3>{user.fromUserId.age + " , " + user.fromUserId.gender}</h3>
          </div>
          </div>
          <div className="flex gap-2">
            <button
              className="btn btn-secondary"
              onClick={()=>handleReview("accepted",user._id)}
            >
              Accept
            </button>
            <button
              className="btn btn-primary"
              onClick={()=>handleReview("rejected",user._id)}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Requests