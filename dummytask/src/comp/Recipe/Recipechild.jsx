import React from 'react'

function Recipechild(prop) {
    console.log(prop)
  return (
    <div className='cards'>
      <img src={prop.item.image} alt=""  width="200"/>
      <p><strong>Item:</strong>{prop.item.name}</p>
      <p><strong>Meal-Type:</strong>{prop.item.mealType}</p>
    </div>
  )
}

export default Recipechild
