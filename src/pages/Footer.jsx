import React from 'react'
import logo from '../components/Assets/logo.png'
import instagram_icon from '../components/Assets/instagram_icon.png'
import pintester_icon from '../components/Assets/pintester_icon.png'
import whatsapp_icon from '../components/Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <>
    <div className="container ">
         <div className=" d-flex justify-content-center">
         <img src={logo} alt="" width="70px" height="70px"/>
        <h1 className='text-center mt-4'>SHOPPER</h1>
         </div>
         <div>
         <ul className=' d-flex justify-content-center mt-3'>
            <li>Company</li>
            <li>Products</li>
            <li>Ofiices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
         </div>
         <div className='d-flex justify-content-center'>
            <img src={pintester_icon} alt="" className='icons' />
            <img src={instagram_icon} alt=""className='icons' />
            <img src={whatsapp_icon} alt="" className='icons'/>
         </div>
       <hr className='mx-auto hr' />
       <p className='text-center'>Copyright @ 2023-All Right Reserved</p>
      </div>
    </>
  )
}

export default Footer
