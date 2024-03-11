import React from 'react'
import { Link } from 'react-router-dom'


const Items = (props) => {
  return (
    <div className='my-3'>
      <Link to={`/product/${props.id}`}> <img src={props.image} alt="" width="215px" className='d-block my-4 mx-auto'/> </Link>
      <p className='text-break'>{props.name}</p>
      <span className='me-1'>${props.old_price}</span>
      <span>${props.new_price}</span>
      
    </div>
  )
}

export default Items
