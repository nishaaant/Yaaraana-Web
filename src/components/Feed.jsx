import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { addFeed } from '../utils/feeedSlice';
import { useDispatch, useSelector } from 'react-redux';
import FeedCard from './FeedCard';

const Feed = () => {

    const feed = useSelector((store) => store.feed)
    const dispatch = useDispatch();

    const getFeed = async() => {
        try{
            const res = await axios.get(BASE_URL + "/feed", {withCredentials : true})
            dispatch(addFeed(res?.data))
        } catch (err)
        {
            console.error(err)
        }
    }

    useEffect(()=>{
        getFeed();
    },[])
  return feed && (
    <div className='flex justify-center my-6'>
        <FeedCard data = {feed[0]}/>
    </div>
  )
}

export default Feed