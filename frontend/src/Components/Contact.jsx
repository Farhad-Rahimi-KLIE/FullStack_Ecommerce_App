import React from 'react'
import location from '../images/location.webp'
const Contact = () => {
  return (
    <div>
      <h1>
        <center className='font-bold text-2xl mt-3'>Feel free to Contact Us</center>
        </h1>
        <img src={location} alt="" className='w-[83rem] ml-3 h-[14rem]'/>
        {/* <div className="container contact_div mb-2">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
            <div className="mb-3">
              <label htmlFor="example" className='form-label'>Fullname</label>
        <input type="text" className="form-control" id="email" placeholder="Enter Fullname" name="Fullname"/>
      </div>
      <div className="mb-3">
      <label htmlFor="example" className='form-label'>Email Address </label>
        <input type="password" className="form-control" placeholder="Enter your Email Address" name="pswd"/>
      </div>
      <div className="mb-3">
      <label htmlFor="example" className='form-label'>Description</label>
        <textarea type="textarea" className="form-control" placeholder="Enter your Description" rows={3} name="pswd"></textarea>
      </div>
    <button type="submit" className="btn btn-primary mt-3 text-slate-950">Submit</button>
            </form>
          </div>
      </div>
      </div> */}
      <div>
      <input type="text" name='text' className='ml-[35rem] mt-4 text-center bg-black text-white py-[0.5rem] px-[2rem]' placeholder='Enter your Fullname'/>
      <input type="text" name='text' className='ml-[35rem] mt-4 text-center bg-black text-white py-[0.5rem] px-[2rem]' placeholder='Enter your Email Address'/>
      <textarea name="description" cols="30" rows="3" className='ml-[35rem] mt-4 text-center bg-black text-white py-[0.5rem] px-[0.2rem]'  placeholder='Enter Description'></textarea>
      <button className="w-[9rem] h-[3.3rem] bg-amber-700 -ml-[12rem] top-11 relative font-bold text-white">Submit</button>
      </div>
    </div>
  )
}

export default Contact
