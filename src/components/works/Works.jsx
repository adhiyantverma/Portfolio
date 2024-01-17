import "./works.scss"
import {useState} from "react";

export default function Works() {
  const [currentSlide, setcurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: " Lorem fslfhksa iafoshjsn afskhfns aflskhfn asflkhnsdf fsisajfs. ",
      img: "https://miro.medium.com/v2/resize:fit:915/0*4DpFVUP_VfkhzSIL"

    },

    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: " Lorem fslfhksa iafoshjsn afskhfns aflskhfn asflkhnsdf fsisajfs. ",
      img: "https://buildfire.com/wp-content/uploads/2017/10/become-mobile-app-developer.jpg"

    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: " Lorem fslfhksa iafoshjsn afskhfns aflskhfn asflkhnsdf fsisajfs. ",
      img: "https://www.mendix.com/wp-content/uploads/Blog-Thumbnail_Future-of-Mobile-App-Dev.png"

    }
  ];
  const handleClick = (way)=>{
    way === "left" ? setcurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
    setcurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0);
  }
  return (
    <div className="works" id="works">
      <div className="slider" style = {{transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt=" " />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src="https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg" alt="" />
              </div>
            </div>          
        </div>))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt=""  onClick = {()=> handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt ="" onClick = {()=> handleClick("right")}/>

    </div>
  )
}
