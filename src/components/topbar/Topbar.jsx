import "./topbar.scss"

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className = {"topbar " + (menuOpen && "active")}>
      <div className = "wrapper">
        <div className = "left">
          <a href="#intro" className = "logo">genius.</a>
          <div className = "itemContainer">
            {/* <img className = "icon" src = "assets/user.png" alt =" "/> */}
            <span>+61-413611147</span>
          </div>
          <div className = "itemContainer">
            {/* <img  className = "icon" src = "assets/mail.png" alt =" "/> */}
            <span>adhiyantverma00623@gmail.com</span>
          </div>
        </div>
        
        <div className = "right">
          <div className="hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>

          </div>
        </div>

      </div>
    </div>
  )
}
