import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { SiRust } from "@react-icons/all-files/si/SiRust";
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash";
import { SiInfluxdb } from "@react-icons/all-files/si/SiInfluxdb";
import { SiJava } from "@react-icons/all-files/si/SiJava";
import { BiTestTube } from "@react-icons/all-files/bi/BiTestTube";
import { SiGrafana } from "@react-icons/all-files/si/SiGrafana";
import { SiLinux } from "@react-icons/all-files/si/SiLinux";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiAnsible } from "@react-icons/all-files/si/SiAnsible";
import { SiWebstorm } from "@react-icons/all-files/si/SiWebstorm";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiD3DotJs } from "@react-icons/all-files/si/SiD3DotJs";
import { SiJest } from "@react-icons/all-files/si/SiJest";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";
import { IconContext } from "@react-icons/all-files"
import "./index.css"


const Projects = () => (
  <Layout>
    <Seo title="Projects" />
    <div className="projects-page-wrapper">
      <div className="projects-text">
        <h1>Projects</h1>
        <p>
        👷🛠 Personal projects to be uploaded soon 👷🛠
          Apprenticeship project write-up to be added 👷🛠
        </p>
        <h4>Apprenticeship projects:</h4>

      </div>
      
      <div className="projects-cards">  
        <div className="card">
            <h3>Watcher to monitor connected devices</h3>
            <hr/>
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiJava /> &nbsp;Java </h5>
            <h5> <BiTestTube /> &nbsp;JUnit5 </h5>
            <h5> <SiGnubash /> &nbsp;Bash</h5>
          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj1/">Read more</Link>
        </div>

        <div className="card">
            <h3>Program to collect thermal data from the routers</h3>
            <hr/>
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiRust /> &nbsp;Rust </h5>
            <h5> <SiGnubash /> &nbsp;Bash</h5>
            <h5><SiInfluxdb /> &nbsp; InfluxDB </h5>
          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj2/">Read more</Link>
        </div>

        <div className="card">
            <h3>Grafana dashboards, for monitoring router stats</h3>
            <hr/>
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiGrafana /> &nbsp;Grafana </h5>
            <h5><SiInfluxdb /> &nbsp; InfluxDB </h5>
          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj3/">Read more</Link>
        </div>

        <div className="card">
            <h3>Speed Test - Server</h3>
            <br />
            <hr/>
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiLinux /> &nbsp; Linux </h5>
            <h5><SiPython /> &nbsp;Python </h5>
            <h5> <SiAnsible /> &nbsp;Ansible </h5>

          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj4/">Read more</Link>
        </div>

        <div className="card">
        <h3>Speed Test - Service, using websockets</h3>
            <br />
            <hr />
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiRust /> &nbsp;Rust </h5>
            <h5><SiWebstorm /> &nbsp; Actix </h5>
            <h5> <SiGnubash /> &nbsp;Bash</h5>
          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj5/">Read more</Link>
        </div>

        <div className="card">
        <h3>Speed Test - User Interface</h3>
            <br />
            <hr />
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiReact /> &nbsp;React </h5>
            <h5> <SiD3DotJs /> &nbsp; D3.js</h5>
            <h5> <SiJest /> &nbsp; Jest </h5>
          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj6/">Read more</Link>
        </div>
        
        <div className="card">
            <h3>QoS set up, prioritization of specific protocols</h3>
            <hr/>
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiLinux /> &nbsp;Linux </h5>
            <h5> <SiGnubash /> &nbsp;Bash </h5>
          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj7/">Read more</Link>
        </div>

        <div className="card">
            <h3>Including Ethernet Connections in bonded groups</h3>
            <hr/>
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiJava /> &nbsp;Java </h5>
            <h5> <BiTestTube /> &nbsp;JUnit5 </h5>
            <h5> <SiGnubash /> &nbsp;Bash</h5>
          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj8/">Read more</Link>
        </div>

        <div className="card">
            <h3>Support Page</h3>
            <br />
            <hr/>
            <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="cards-icons">
            <h5><SiReact /> &nbsp; React </h5>
            <h5> <SiJest /> &nbsp; Jest </h5>
            <h5> <SiCss3 /> &nbsp; CSS</h5>
          </div>
          </IconContext.Provider>
          <hr/>
          <Link to="/prj9/">Read more</Link>

        </div>
      </div>
    </div>
  </Layout>
)

export default Projects
