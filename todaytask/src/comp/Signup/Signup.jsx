import React from "react";
import './Signup.css'
class Signup extends React.Component {


    render() {
        return (
            <div className="form">
                <form>
                    <label htmlFor=""> Name</label><br></br>
                    <input type="text" placeholder="First Name" required></input><br /><br />

                    <input type="text" placeholder="Last Name" required /><br /><br />
                    <label htmlFor="">Email</label><br />
                    <input type="email" placeholder="Email" required /><br /><br />
                    <label htmlFor="">Mobile</label><br />
                    <input type="number" placeholder="Contact Number" required /><br /><br />
                    <button type="submit">submit</button>
                </form>

            </div>
        )
    }
}
export default Signup