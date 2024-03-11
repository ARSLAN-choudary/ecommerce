import React, { useEffect } from 'react'

const Loginsignup = () => {

 useEffect(() => {
  document.body.style.backgroundColor= "lightpink";
  return () => {
    document.body.style.backgroundColor = ''; 
  };
 }, [])

  return (
    <div >
    <div className="container my-5 form">
      <h2 className='text-center'>sign up</h2>
    <form className=' my-5 mx-auto'>
    <div className=" mb-3 mt-3">
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>

  <div className="mb-3">
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
    
  </div>

  <div className="mb-3">
    <input type="password" className="form-control" id="exampleInputPassword1"placeholder="Password"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <p className="fs"> Already have an accont? Login here</p>
  </div>
  
  <div className="d-grid gap-2 col-6 mx-auto ">
  <button className="btn btn-danger mb-5" type="button">Continue</button>
</div>
</form>
    </div>
      
    </div>
  )
}

export default Loginsignup
