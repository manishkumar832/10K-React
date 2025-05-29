import React from 'react'
import { data } from './Pdata.jsx'
import './Product.css'

const ProductChild = (props) => {
    console.log(props)
   
    return (

             <div className='cards'>
                <img src={props.item.thumbnail} width="200" />
                <p><strong>Title:</strong>{props.item.title}</p>
                <p><strong>Price:</strong>{props.item.price}</p>
            </div>

           
    )

   
}

export default ProductChild
