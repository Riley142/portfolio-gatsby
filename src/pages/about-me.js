import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiRust } from "@react-icons/all-files/si/SiRust";
import { SiJava } from "@react-icons/all-files/si/SiJava";
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash";
import { SiInfluxdb} from "@react-icons/all-files/si/SiInfluxdb";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { IconContext } from "@react-icons/all-files"
import "./index.css"


const AboutMe = () => (
  <Layout>
    <Seo title="About me" />
    <div className="about-me">
    <div className="about-me-wrapper">
      <div className="about-me-text">
        <h1>About me</h1>
        <p>Hi, I'm Riley and I'm a Software Developer  at Albeego 🐝 <br/>
        I've a graduated from 2 of the CodeNation Bootcamps - Develop & Master Coding 🤓<br/>
        I'm very dedicated to learn new things and truly belive that you should never stop learning 📚<br/> 
        </p>
        <p>
        Other then coding, I love creating things, and taking other things apart to see how they work 👩🏼‍🔧 <br />
        In free time You can find me soldering a new mechanical keyboard or woodworking 🛠️<br/>
        I also like a good book or a podcast aspecially about CyberSecurity and history of technology 🧑‍💻
        </p>
        <p>See <Link to="/projects/"> projects</Link> I worked on.</p>
      </div>
     
      <div className="tech-stack-wrapper">
          <h3>🛠 Technologies </h3>
          <IconContext.Provider
          value={{ 
            size: "22px", 
            className: "back-end-icons" }}
          >
          <div className="back-end-icons">
            <h5><SiRust /> &nbsp; Rust </h5>
            <h5><SiJava /> &nbsp; Java </h5>
            <h5><SiGnubash /> &nbsp; Bash </h5>
            <h5><SiInfluxdb /> &nbsp; InfluxDB </h5>
          </div>
          </IconContext.Provider>

          <IconContext.Provider
          value={{ 
            size: "22px", 
            className: "front-end-icons" }}
          >
          <div className="front-end-icons">
            <h5><SiJavascript /> &nbsp; JavaScript </h5>
            <h5><SiReact /> &nbsp; React </h5>
            <h5><SiGatsby/> &nbsp; Gatsby </h5>
            <h5><SiCss3 /> &nbsp; CSS </h5>
            <h5><SiHtml5 /> &nbsp; HTML </h5>
          </div>
          </IconContext.Provider>
          <br />
        </div>
    </div>
    </div>
  </Layout>
)

export default AboutMe
