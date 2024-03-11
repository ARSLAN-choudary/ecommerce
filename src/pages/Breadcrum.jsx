import React from 'react'
import arrow_icon from '../components/Assets/arrow.png'

const Breadcrum = () => {
    const{product}=props;
  return (
    <>
     <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" />{product.category} <img src={arrow_icon} alt="" />{product.name}
      
    </>
  )
}

export default Breadcrum
