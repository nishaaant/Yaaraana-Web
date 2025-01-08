import axios from 'axios';
import React from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feeedSlice';

const FeedCard = ({data}) => {


  const dispatch = useDispatch();

  const sendStatus = async(status , _id) => {
  try{
    const res = await axios.post(BASE_URL + "/request/send/" +status+ "/"+ _id ,{},{withCredentials:true})
   dispatch(removeUserFromFeed(_id)) 
  }
    catch(err){
      console.error(err)
    }
  }

    const {_id ,firstName , lastName , photo , about , age , gender , skills} = data;
  return (
    <div>
        <div className="card bg-base-300 w-96 shadow-xl">
  <figure>
    <img className='h-80'
      src={photo}
      alt="user photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender && <p>{age + ", " + gender}</p>}
    <p>{about}</p>
    <div className="my-2 card-actions justify-around">
      <button className="btn btn-warning" onClick={()=> sendStatus("ignore", _id)}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=> sendStatus("like", _id)}>Like</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default FeedCard