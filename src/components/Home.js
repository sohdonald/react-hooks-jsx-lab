import React from "react";
import { name, city } from "../data/data.js";

const homeColor = {
  color:"firebrick"
}

function Home() {
  // update the JSX being returned!

  return (
  <div id="home">
    Home
  <h1 style={homeColor}>{name} is a Web Developer from {city}</h1>
  </div>
  );
}

export default Home;
