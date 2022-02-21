import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiRust } from "@react-icons/all-files/si/SiRust"
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash"
import { SiInfluxdb } from "@react-icons/all-files/si/SiInfluxdb"
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj2 = () => (
  <Layout>
    <Seo title="Project - Modem watcher" />
    <div className="project-page">
      <h3>Watcher to monitor connected devices</h3>
      <hr />
      <IconContext.Provider
        value={{
          size: "32px",
          className: "tech-stack",
        }}
      >
        <div className="cards-icons">
          <h5>
            <SiRust /> &nbsp;Rust
          </h5>
          <h5>
            <SiGnubash /> &nbsp;Bash
          </h5>
          <h5>
            <SiInfluxdb /> &nbsp; InfluxDB
          </h5>
        </div>
      </IconContext.Provider>
      <hr />

      <h4>Things done in the project :</h4>
      <ul>
        <li>Researched on how to collect CPU thermal data from the router</li>
        <li>Written bash script to update the routers with packages install for all necessary tools</li>
        <li>Push data to InfluxDB
          <ul>
            <li>
            Written a command file for thermal data
            </li>
            <li>Parsing bash output using AWK</li>
            <li>Written mapper file for thermal data</li>
          </ul>
        </li>
        <li>Unit tests</li>
        <li>Testing updated software on routers, using ssh, reading through the logs</li>
      </ul>
    </div>
  </Layout>
)

export default Prj2
