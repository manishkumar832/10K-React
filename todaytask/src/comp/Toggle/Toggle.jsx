import React from "react";

class Toggle extends  React.Component{
    constructor(){
        super();
        this.state={
            isDark:false,
        }
    }
    handletheme=()=>{
        this.setState((x)=>
      ({isDark:!x.isDark})
        )
    }
    render(){
        return(
  <div style={{backgroundColor:this.state.isDark?"black":"white",width:"100%",height:"100vh",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
    
    <button onClick={this.handletheme} style={{ padding: "0.75rem 1.5rem",
    backgroundColor: "",
    color: "#000",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",}}>{this.state.isDark?"Light":"Dark"}</button>
  </div>
        )
    }
}
export default Toggle