import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiReact } from "@react-icons/all-files/si/SiReact"
import { SiD3DotJs } from "@react-icons/all-files/si/SiD3DotJs"
import { SiJest } from "@react-icons/all-files/si/SiJest"
import { SiCss3 } from "@react-icons/all-files/si/SiCss3"
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5"
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj6 = () => (
  <Layout>
    <Seo title="Project - Modem watcher" />
    <div className="project-page">
      <h3>Speed Test - User Interface</h3>
      <hr />
      <IconContext.Provider
        value={{
          size: "32px",
          className: "tech-stack",
        }}
      >
        <div className="cards-icons">
          <h5>
            <SiReact /> &nbsp;React
          </h5>
          <h5>
            <SiD3DotJs /> &nbsp; D3.js
          </h5>
          <h5>
            <SiJest /> &nbsp; SiJest
          </h5>
          <h5>
            <SiCss3 /> &nbsp; CSS
          </h5>
          <h5>
            <SiHtml5 /> &nbsp; HTML
          </h5>
        </div>
      </IconContext.Provider>
      <hr />
      <p>I'm Currently working on this project - not finished</p>
      <p>
        In this project I’ve built the user interface for the speed test
        service. I’ve connected the speed test service program with speed test
        server and the front end UI.
      </p>
      <h4>Things done in the project :</h4>
      <ul>
        <li>Discuss the design & UI</li>
        <li>Join the Front End, with Speed Test Service & the Server</li>
        <li>Write front end code</li>
        <li>Use D3js to create SVGs for the speed test clock</li>
        <p>To do:</p>
        <li>Unit tests for the UI using Jest</li>
        <li>Deploy a updated version of BeeView with speed test</li>
      </ul>
    </div>
  </Layout>
)

export default Prj6
