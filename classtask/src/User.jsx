import React from 'react'
import {userdata} from './data'
import './Usercard.css'
import Userchild from './Userchild'



function User() {


  return (
    <div className='maindiv'>
     {
        userdata.map((u)=>{
           return(
            <>
               <Userchild user={u}/>
            </>
        
           )
        })
     }
    </div>
  )
}

export default User
