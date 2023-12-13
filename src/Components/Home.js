import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Dialog from './Dialog';

const Home = () => {

  
  const [email,setEmail]=useState('');

  return (
    <>


    
    

<button type="button" class="btn btn-primary mt-1 ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">enter email</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} class="form-control" id="email"/>
          </div>
       
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-bs-dismiss='modal'  class="btn btn-primary">Done</button>
      </div>
    </div>
  </div>
</div>
{/* {
  email?<Dialog Email={email}/>:''
} */}
    </>
  )
}

export default Home