import React from "react";
import Image from "../images/home.svg";

const Home = () => {
  return (
    <div className="home-div">
      <h2 className="home-title">
        Searching for free HD images ? Search Anything here
      </h2>
      <img src={Image} className="home-pic" alt="Dot simplify home pic" />;
    </div>
  );
};

export default Home;
