import React from 'react'
import  {data} from './data.jsx'
import Recipechild from './Recipechild.jsx'

function Recipe() {
  return (
    <div className='cardcontainer'>
      {
        data.recipes.map((x)=>{
          return(
            <div>
              <Recipechild item={x}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Recipe
