import React from "react";
class Randomclr extends React.Component{
    constructor(){
        super();
        this.state={
            bgcolor:"#fff"
        }
    }
    Randomclr=()=>{
        let char="0123456789abcdef"
        let clrcode="#"
        for (let i=0;i<6;i++){
            const indexNum=Math.floor(Math.random ()*char.length)
            clrcode+=char[indexNum]
        }
        console.log(clrcode,"colour")
        this.setState({bgcolor:clrcode})
    }
    render(){
        return(
             <div style={{backgroundColor:this.state.bgcolor,width:"100%",height:"100vh",display:"flex",alignItems:"center",justifyContent:'center'}}>
                 <button onClick={this.Randomclr} style={{  padding: "0.75rem 1.5rem",
    backgroundColor: "",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
    }} >RandomColour</button>
             </div>
           
        )

    }
}
export default Randomclr