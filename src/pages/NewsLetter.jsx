import React from 'react'

const NewsLetter = () => {
  return (
    <>
    <div className="container my-5 Newsletter">
        <h1 className='text-center pt-5 pb-3'>Get Exclusive Offers On Your Email</h1>
        <h5 className='text-center'>Sybscribe To Our Newsletter and Stay Upto date</h5>
                <div className="input-group mb-3 mx-auto mt-5" >
        <input type="email" className="form-control rounded-pill py-2" placeholder="Your Email id" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-outline-danger rounded-pill py-2" type="button" id="button-addon2">Subscribe</button>
        </div>
    </div>
      
    </>
  )
}

export default NewsLetter
