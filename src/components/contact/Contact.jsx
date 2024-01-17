import "./contact.scss"
import {useState} from "react";

export default function Contact() {

  const [message, setMessage] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className = "contact" id = "contact">
      <div className="left">
        <img src="https://media.istockphoto.com/id/1291137896/video/business-people-shaking-hands-successful-corporate-partnership-deal-animated-handshake-4k.jpg?s=640x640&k=20&c=z2H_3ebfhX4cHjzu8t_pHijG_IFBehgqzbmR88S8qog=" alt=""/>
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type = "text" placeholder = "Email"/>
          <textarea placeholder="Message"></textarea>
          <button type = "submit">send</button>
          {message && <span>Thanks, I will reply ASAP 😃 </span>}
        </form>
      </div>

    </div>
  )
}
