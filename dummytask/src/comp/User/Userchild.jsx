import React from 'react'

function Userchild(x) {
  return (
    <div className='cards'>
      <img src={x.person.image} alt="" />
      <p><strong>User:</strong>{x.person.firstName}{x.person.lastName}</p>
      <p><strong>Email:</strong>{x.person.email}</p>
    </div>
  )
}

export default Userchild
