import './Contact.css'
function Contact(){
    return (
        <div id="contactForm">
            <h1>Contact</h1>
            <hr />
            <p>Lets get in touch and talk about your next project.</p>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text"  placeholder="Subject"/>
            <input type="text" placeholder="Comment" />
            <span>SEND MESSAGE</span>
        </div>
    )
}
export default Contact;