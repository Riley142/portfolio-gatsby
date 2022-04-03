import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiRust } from "@react-icons/all-files/si/SiRust";
import { SiWebstorm } from "@react-icons/all-files/si/SiWebstorm";
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash"
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj5 = () => (
  <Layout>
    <Seo title="Project - Modem watcher" />
    <div className="project-page">
      <h3>Speed Test - Service, using websockets</h3>
      <hr />
      <IconContext.Provider
        value={{
          size: "32px",
          className: "tech-stack",
        }}
      >
        <div className="cards-icons">
          <h5><SiRust /> &nbsp;Rust </h5>
          <h5><SiWebstorm /> &nbsp; Actix </h5>
          <h5> <SiGnubash /> &nbsp;Bash</h5>
        </div>
      </IconContext.Provider>
      <hr />
      <p>
        This Rust program, I’ve written is using bash tool iperf3 to test the
        download and upload speed. It’s using parsed values from iperf output
        and sends them using websockets, which can later be display in the User
        Interface.
      </p>
      <p>
        I've also built a linux .deb package of the program, to run it on the router.
        Also opened port the speed test program is running on using IP tables on the device.
      </p>
      <h4>Things done in the project :</h4>
      <ul>
        <li>Research different Speed Tests work</li>
        <li>Learned the chosen technology to write the program</li>
        <li>Written a  test project for using Rust with Websockets with Actix</li>
        <li>Build the speed test service – CLI program (iperf3)</li>
        <li>Build the speed test service – Rust, Websocket Actix program and add the iperf3 CLI program.</li>
        <li>Setup iperf3 to run as a systemD unit (on speed-test-server)</li>
        <li>Write unit tests & test the speed test</li>
      </ul>
    </div>
  </Layout>
)

export default Prj5
