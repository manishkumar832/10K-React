import React from "react";
import data from './Fakedata.jsx'
import './Fake.css'
const Fakeproduct=()=>{
    console.log(data)
    return(
        <div id="total">
            <h1>Recipies</h1>
           <div className="cardContainer">
            {data.map((item,index)=>{
                return(
                    <div className="cards">
                        <img src={item.image} alt="" width="200" />
                        <p><strong>Item:</strong>{item.name}</p>
                        <p><strong>Cuisine</strong>{item.cuisine}</p>
                        <span><strong>MealType:</strong>{item.mealType}</span>
                    </div>
                )
            })}
           </div>
        </div>
    )
}
export default Fakeproduct;