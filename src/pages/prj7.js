import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiLinux } from "@react-icons/all-files/si/SiLinux"
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash"
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj7 = () => (
  <Layout>
    <Seo title="Project - Modem watcher" />
    <div className="project-page">
      <h3>QoS set up, prioritization of specific protocols</h3>
      <hr />
      <IconContext.Provider
        value={{
          size: "32px",
          className: "tech-stack",
        }}
      >
        <div className="cards-icons">
          <h5>
            <SiLinux /> &nbsp;Linux
          </h5>
          <h5>
            <SiGnubash /> &nbsp;Bash
          </h5>
        </div>
      </IconContext.Provider>
      <hr />
      <p>
        In this project I’ve spend a lot time researching about Linux QOS -
        Quliaty of Service. It also included learning more about networking and
        setting iptables.
      </p>
      <h4>Things done in the project :</h4>
      <ul>
        <li>Reasearch about QoS (Quality of Service)</li>
        <li>Learn fundamentals of iptables </li>
        <li>Research tools to set QoS rules </li>
        <li>Tested different rules + iperf tools</li>
        <li>Classified/marked packets and or ports/protocols (iptables)</li>
        <li>Learned more in depth about TOS markings, protocols and ports</li>
        <li>Prioritize	InfluxDB & BeeView over speed tests</li>
        <li>Device testing and deploy software to device → test on all interfaces</li>
      </ul>
    </div>
  </Layout>
)

export default Prj7
