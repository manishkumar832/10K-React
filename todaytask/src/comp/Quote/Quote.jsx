import React from "react";
import './Quote.css'
class Quote extends React.Component{
    constructor(){
        super();
        this.state={
            quote:"Hello Click button To see Quote"
        }
    }
 handleQuote=()=>{
     const Quotes = [
     "Believe you can and you're halfway there.” – Theodore Roosevelt ",

"The best way to predict the future is to create it. – Peter Drucker",

"Do what you can, with what you have, where you are. – Theodore Roosevelt",

"Doubt kills more dreams than failure ever will.",

"Start where you are. Use what you have. Do what you can.– Arthur Ashe",
"Work hard in silence, let your success make the noise.",

"Don't limit your challenges. Challenge your limits.",

"Push yourself, because no one else is going to do it for you.",

"Success doesn’t come from what you do occasionally. It comes from what you do consistently.",

"Discipline is the bridge between goals and accomplishment. – Jim Rohn",


    ];


for(let i=0;i<Quotes.length;i++){
    let randomone=Math.floor(Math.random()*Quotes.length)
    console.log(randomone)
    this.setState({quote:Quotes[randomone]})
}
 }

render(){
    return(
        <div className="quote-container">
            <h1>{this.state.quote}</h1>
           <button onClick={this.handleQuote}>Click Here</button>
        </div>
    )
}


}
export default Quote