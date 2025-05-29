import React from 'react'
import {data} from './Userdata'
import './Userchild'
import Userchild from './Userchild'

function User() {
  return (
    <div className='cardcontainer'>
      {
       data.users.map((u)=>{
          return (
          <Userchild person={u}/>
          )
        })
      }
    </div>
  )
}

export default User
