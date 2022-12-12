import React from "react";
import Banner from "../compoments/Banner";
import aboutData from '../datas/aboutData'
import Collapse from "../compoments/Collapse";
import imageBanner from "../images/banner1.png";
import '../styles/about.css'
import { useEffect } from 'react'

const About = () => {
 
  const content = (title) => {
    switch (title) {
      case "fiability":
        return aboutData.fiability;
      case "respect":
        return aboutData.respect;
      case "service":
        return aboutData.service;
      case "sécurity":
        return aboutData.security;
      default:
        console.log("default");
        break;
    }
  };
  const title= "Les engagements de KASA"
  useEffect(() => {
  document.title = `${title}`
}, [])
  return (
    <div className="about">
      <Banner image={imageBanner} />
      <div className="about__dropdowns">
        <Collapse title="fiabilité" content={content("fiability")} />
        <Collapse title="respect" content={content("respect")} />
        <Collapse title="service" content={content("service")} />
        <Collapse title="sécurité" content={content("sécurity")} />
      </div>
    </div>
  );
};

export default About;