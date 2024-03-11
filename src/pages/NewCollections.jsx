import React from 'react'
import new_collections from '../components/Assets/new_collections'
import Items from './Items'

const NewCollections = () => {
  return (
    <>
    <div className="container my-5">
        <h1 className='text-center '>NEW COLLECTIONS</h1>
        <hr className='mx-auto mb-5'/>
        <div className="row">
            {new_collections.map((item,i)=>{
              return (
              <div className="col">
                <Items key={i} id={item.id} image={item.image}  new_price={item.new_price} old_price={item.old_price} name={item.name} />
              </div>)
            })}
        </div>
    </div>
      
    </>
  )
}

export default NewCollections
