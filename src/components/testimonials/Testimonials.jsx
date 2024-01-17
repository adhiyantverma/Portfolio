import "./testimonials.scss"

export default function Testimonials() {
  const data =[
  {
    id: 1, 
    name: "Tom Durden",
    title: "Senior Developer",
    img: "https://w7.pngwing.com/pngs/31/734/png-transparent-web-development-programmer-software-development-software-developer-computer-software-world-wide-web-furniture-reading-information-technology.png",
    icon:"assets/twitter.png",
    desc: "Lorem afss asfadf sdfds affsf safsdf asfsa fasfsd fdsfggasffs fcasf asfsa fassa fds.",
  },

  {
    id: 2, 
    name: "Alex Kalinski",
    title: "Co-Founder of Delka",
    img: "https://w7.pngwing.com/pngs/31/734/png-transparent-web-development-programmer-software-development-software-developer-computer-software-world-wide-web-furniture-reading-information-technology.png",
    icon:"assets/youtube.png",
    desc: "Lorem afss asfadf sdfds affsf safsdf asfsa fasfsd fdsfggasffs fcasf asfsa fassa fds.",
    featured: true,
  },

  {
    id: 3, 
    name: "Martin duo",
    title: "CEO of ALBI",
    img: "https://w7.pngwing.com/pngs/31/734/png-transparent-web-development-programmer-software-development-software-developer-computer-software-world-wide-web-furniture-reading-information-technology.png",
    icon:"assets/linkedin.png",
    desc: "Lorem afss asfadf sdfds affsf safsdf asfsa fasfsd fdsfggasffs fcasf asfsa fassa fds.",

  },
];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
      {data.map((d)=>(
        <div className={d.featured ? "card featured": "card"}>
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="" />
            <img className="user" src={d.img} alt="" />
            <img className="right" src={d.icon} alt="" />
          </div>
          <div className="center">
            {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}
