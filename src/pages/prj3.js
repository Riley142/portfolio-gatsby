import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiGrafana } from "@react-icons/all-files/si/SiGrafana"
import { SiInfluxdb } from "@react-icons/all-files/si/SiInfluxdb"
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj3 = () => (
  <Layout>
    <Seo title="Project - Modem watcher" />
    <div className="project-page">
      <h3>Grafana dashboards, for monitoring router stats</h3>
      <hr />
      <IconContext.Provider
        value={{
          size: "32px",
          className: "tech-stack",
        }}
      >
        <div className="cards-icons">
          <h5>
            <SiGrafana /> &nbsp;Grafana
          </h5>
          <h5>
            <SiInfluxdb /> &nbsp; InfluxDB
          </h5>
        </div>
      </IconContext.Provider>
      <hr />
      <h4>Things done in the project :</h4>
      <ul>
        <li>Research on Grafana</li>
        <li>Learn how to query data in InfluxDB - Flux language</li>
        <li>Created Router Detail dashboard</li>
        <li>Created Exit Node List dashboard</li>
      </ul>
    </div>
  </Layout>
)

export default Prj3
