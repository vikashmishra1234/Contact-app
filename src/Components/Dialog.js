import React, { useState } from 'react'
import { addUser } from './Api/Api';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from './Contact';


const Dialog = (props) => {


    //     const getData = async()=>{
    // const url = 'http://localhost:4000';
    // try {
    //     let response = await axios.get('http://localhost:4000/api/getdata');
    //   alert(response.data.msg);

    // } catch (error) {
    //     console.log("error while calling api",error.message);
    //     alert("cannot call the get api ")
    // }


    //     }
    //     getData();







    const url = 'http://localhost:4000';
    const Email = props.Email;

    const [data, setData] = useState({ name: '', email: '', phone: '' });
    const [contacts, setContacts] = useState([])
    const [email,setEmail]=useState('')

    const getContact = async () => {

       

        try {
            let response = await axios.post(`${url}/api/getdata`, { email });
            setContacts(response.data)
            setEmail('')
           


        } catch (error) {
            console.log("cannot call the get data api", error.message)
        }


    }

    const handelClick = async () => {
        console.log(data)



        try {
            let response = await axios.post('http://localhost:4000/api/add', data);
            if(response.data.error){
                toast.error(response.data.error, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
              

            }

            toast.success(response.data.msg, {
                position: toast.POSITION.TOP_RIGHT,
              });
          

        } catch (error) {
            console.log("error while calling api", error.message);
            alert("cannot call the api ")
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-success navbar-dark">
                <div className="container-fluid d-flex">
                    <h2 className="navbar-brand fs-2" >Contact</h2>



                 

                </div>
            </nav >


            <div className='d-flex mt-3 '>
                <div style={{ marginLeft: '50px',width:'400px',boxShadow:'0px 3px 9px solid' }} className=' bg-success  '>
                <h3 className='w-100 bg-danger text-center p-3'>Add Contact</h3>

                    <form >
                        <div className="mb-3 w-75 ms-3  bg-success">

                            <label htmlFor='name' className="form-label text-light">Name</label>
                            <input type="text"  name='name' className="form-control shadow-lg " value={data.name} onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} />

                        </div>

                        <div className="mb-3 w-75 ms-3 bg-success">
                            <label htmlFor='number' className="form-label text-light">Number</label>
                            <input type="text" value={data.phone} name='phone' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} className="form-control" />
                        </div>

                        <div className="mb-3 w-75 ms-3 text-light bg-success">
                            <label htmlFor='email' className="form-label">Email</label>
                            <input type="email" value={data.email} name='email' onChange={(e) => { setData({ ...data, [e.target.name]: e.target.value }) }} className="form-control" />
                        </div>
                    </form>

                    <button  className="btn ms-2 btn-primary mb-2 mt-2 " onClick={ handelClick}>Save</button>
                    <button type="button" onClick={getContact} className="btn mb-2 btn-primary mt-2 ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Contact</button>

                    {/* <button onClick={getContact} className="btn btn-primary mt-2 ms-3">contacts</button> */}
                </div>








                {/* your contacts */}

                <div className='    bg-success overflow-scroll border-danger w-50 j-75% d-flex flex-column align-items-center '
                    style={{
                        maxHeight: '80vh',
                        marginLeft:'180px',
                        boxShadow:'-1px -3px -7px '
                    }}
                >

                    <h3 style={{ width: '48.9vw' }} className='text-center position-fixed bg-danger  p-3'>Your Contacts</h3>

                    <div style={{ marginTop: '50px' }} className='w-50  ms-3  p-3'>
                        {
                            contacts.map(user => (
                                <Contact user={user} />
                            ))
                        }
                    </div>


                </div>

            </div>



        




<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="col-form-label">Email</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="recipient-name"/>
          </div>
       
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" data-bs-dismiss="modal" className="btn btn-primary" onClick={getContact}>Done</button>
      </div>
    </div>
  </div>
</div>


<ToastContainer />


        </>
    )
}

export default Dialog