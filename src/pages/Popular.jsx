import React from 'react'
import data_product from '../components/Assets/data'
import Items from './Items'

const Popular = () => {
  return (
    <>
    <div className="container">
                <h1 className='text-center mt-5'>Popular in Women</h1>
                <hr  width="50%" className='mx-auto mb-5'/>
        <div className="row">
                {data_product.map((item,i)=>{
                    
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

export default Popular
