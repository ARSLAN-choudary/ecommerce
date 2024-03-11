import React from 'react'


const DisplayProduct = (props) => {
  const product=props;
  return (
    <div>
      <h1 className='text-center my-5'>this page is temporary empty</h1>
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <img src={product.image} alt="" />
      <h1>{product.name}</h1>
    </div>
  )
}

export default DisplayProduct
