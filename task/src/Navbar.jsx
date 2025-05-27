import './Navbar.css'
function Navbar(){
    return(
        <div className="navbar" style={{ display: "flex", backgroundColor: "white", color: "black", justifyContent: "space-around", alignItems: "center",position:"fixed",width:"100vw",zIndex:"1" }}>
        <p style={{ fontSize: "1.5rem", display: "flex", gap: "12px", alignItems: "center" }}><span style={{ fontSize: "2rem", fontFamily: "monospace", fontWeight: "bolder" }}>BR</span>Architect</p>
        <div id="rightNav" style={{ display: "flex", gap: "20px" }}>
            <span>Projects</span>
            <span>About</span>
            <span>Contact</span>
        </div>
    </div>
    )
}

export default Navbar;