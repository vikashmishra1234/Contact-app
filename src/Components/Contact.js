import React from 'react'
import { FaPhone } from "react-icons/fa6";



const Contact = (props) => {
  return (
    <div  style={{
    
        padding: '10px 11px 6px 30px',
        fontSize:' 20px',
        width: '297px',
        boxShadow: '2px 7px 9px',
        margin: '11px 0px 11px 0px',
        background:'#fff',
        border:'none',
        borderRadius:'11px'


    
    }}>
   <FaPhone /><span
                style={{
                   margin:' 2px 0px 0px 12px'
                }}
           >
            
            {props.user.name}</span> <br/>



   <div className='text-decoration-none'> <a className='text-decoration-none text-muted' href={`https://wa.me/${props.user.phone}`}> {props.user.phone}</a> </div>
   
      
    </div>
  )
}

export default Contact
