import React from 'react'

const FeedCard = ({data}) => {
    const {firstName , lastName , photo , about , age , gender , skills} = data;
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
      <button className="btn btn-warning">Ignore</button>
      <button className="btn btn-secondary">Like</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default FeedCard