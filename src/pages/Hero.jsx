import React from 'react'
import hand_icon from '../components/Assets/hand_icon.png';
import hero_image from '../components/Assets/hero_image.png'
const Hero = () => {
  return (
    <>
      
        <div className="row hero">
            <div className="col mt-5 ms-5">
                <h4>NEW ARRIVALS ONLY</h4>
                <span className='display-4'>new</span>
                <img src={hand_icon} width="70px" />
                <p className='display-4'>Collections</p>
                <p className='display-4'>for everone</p>
                <button type="button" className="btn btn-danger rounded-pill px-5">Lattest Collection </button>
            </div>
            <div className="col">
                  <img src={hero_image} alt="" width="350px" className='column-gap-3' />
                </div>
        </div>
      
    </>
  )
}

export default Hero
