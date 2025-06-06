import React from 'react'
import { userdata } from './data'

function Userchild({user}) {
  return (
    <div className='usercard'>
       <img src={user.image} alt="" />
                <p style={{color:'black', fontFamily:'inherit',fontSize:'large',fontWeight:'900'}}>{user.name}</p>
                <p><strong> Email:</strong>{user.email}</p> 
               <p><strong>Address:</strong>{user.address.street},{user.address.city}</p>
               <p><strong>Company:</strong>{user.company.name}</p>
               <p><strong>Phone:</strong>{user.phone}</p>
    </div>
  )
}

export default Userchild
