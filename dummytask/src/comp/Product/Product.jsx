import React from 'react'
import {data} from './Pdata.jsx'
import ProductChild from './ProductChild'
import './Product.css'

function Product() {
  return (
    <div className="cardcontainer">
      {
        
        data.products.map((p)=>{
            return(
               <div>
                <ProductChild  item={p}/>
                </div> 
            )
        })
      }
    </div>
  )
}

export default Product
