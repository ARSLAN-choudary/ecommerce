import React from 'react'
import exclisive_image from '../components/Assets/exclusive_image.png'

const Offers = () => {
  return (
    <>
    <div className="container my-5 offers">
        <div className="row">
            <div className="col my-5">
            <h1 className='display-4'>Exclusive</h1>
                <h1 className='display-4'>Offers For You</h1>
                <p className='display-5'>ONLY ON BEST SELLERS</p>
                <button type="button" className="btn btn-danger rounded-pill px-5">Check Now </button>
            </div>
            <div className="col">
                <img src={exclisive_image} alt="" width="300px" className='ms-5 float-lg-end ' />
            </div>
        </div>
    </div>
      
    </>
  )
}

export default Offers
