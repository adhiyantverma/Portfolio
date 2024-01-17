
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { useState, useEffect } from "react";
import { featuredPortfolio, webPortfolio, mobilePortfolio, contentPortfolio, designPortfolio } from "../../data.js";

export default function Portfolio() {
  // eslint-disable-next-line
  const [selected, setSelected] = useState("featured");
  // eslint-disable-next-line 
  const [data, setData] = useState([]);

  const list = [

    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "web App",
    },
    {
      id: "Mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "design",
    },

    {
      id: "content",
      title: "Content",
    },
  ];

  useEffect(() => {

    switch (selected) {
      case "fetured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "Mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);

    }

  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
