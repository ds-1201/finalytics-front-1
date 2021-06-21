import React,{useState} from "react";
import "./HowToTrade.css";
import HowToTrade_Header from "../dashboard/components/Header/HowToTrade_Header";
import Card from "./Cards/Card";
import Article from "./Article/Article";

function HowToTrade() {
  const [clicked,setClicked] = useState();

  const handleClick = (id) => {
    setClicked(id);
  }

  const handleClick2 = () => {
    setClicked();
  }

  return (
    <div>
      <div >
      {
        (!clicked) ? (<>
        <div className="HowToTrade_Header">Learn How To Trade </div>
        {/* <HowToTrade_Header /> */}
        <div className="card-list-container">
        <Card 
          id = "0"
          ClickHandler = {handleClick}
          // subTitle="Glossary and Key Words"
          title="Glossary"
          imageUrl="https://i.postimg.cc/bvGWN57B/glossary.png"
          body="Start your journey into the world of trading by learning about keywords such as..."
          />
          <Card 
          id = "1"
          ClickHandler = {handleClick}
          // subTitle="Glossary and Key Words"
          title="Key Terms"
          imageUrl="https://i.postimg.cc/JzTtWy8Q/keyterms.png"
          body="Learn about a list of frequently used financial terms to thoroughly comprehend..."
          />
          <Card 
          id = "2"
          ClickHandler = {handleClick}
          // subTitle="Imperative Ratios"
          title="Liquidity Ratios"
          imageUrl="https://i.postimg.cc/dtpSN6kR/liquidityratios.png"
          body="Liquidity ratios are the ratios that measure the ability of a company to meet its..."
          />
          <Card 
          id = "3"
          ClickHandler = {handleClick}
          // subTitle="Imperative Ratios"
          title="Capital Structure Ratios"
          imageUrl="https://i.postimg.cc/W1rj5h33/csratio.png"
          body="Capital structure refers to the degree of long-term financing of a business concern as in..."
          />
          <Card 
          id = "4"
          ClickHandler = {handleClick}
          // subTitle="Imperative Ratios"
          title="Financial Leverage"
          imageUrl="https://i.postimg.cc/MK29yTht/financialleverage.png"
          body="Financial leverage is the using of equity share capital and preference share capital along with..."
          />
          <Card 
          id = "5"
          ClickHandler = {handleClick}
          // subTitle="Imperative Ratios"
          title="Profitability Ratios"
          imageUrl="https://i.postimg.cc/sgtx2kBB/profit.png"
          body="Every firm is most concerned with its profitability. One of the most frequently used tools of..."
          />
        </div>
        </>): (<div className="howtotrade-container"><Article id={clicked} ClickHandler={handleClick2}/></div>)
      }
      </div>  
    </div>
  );
}

export default HowToTrade;

