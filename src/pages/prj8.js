import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiJava } from "@react-icons/all-files/si/SiJava"
import { BiTestTube } from "@react-icons/all-files/bi/BiTestTube"
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash"
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj8 = () => (
  <Layout>
    <Seo title="Project - Modem watcher" />
    <div className="project-page">
      <h3>Including Ethernet Connections in bonded groups</h3>
      <hr />
      <IconContext.Provider
        value={{
          size: "32px",
          className: "tech-stack",
        }}
      >
        <div className="cards-icons">
          <h5>
            <SiJava /> &nbsp;Java
          </h5>
          <h5>
            <BiTestTube /> &nbsp;JUnit5
          </h5>
          <h5>
            <SiGnubash /> &nbsp;Bash
          </h5>
        </div>
      </IconContext.Provider>
      <hr />
      <p>
        It’s a first project I worked on using Java. In this program I’ve used
        the `nmcli device` bash command to get network details, so I could get
        information about Ethernet devices. I’ve mapped and parsed that bash
        command output to get needed information - interface names and Ethernet
        state. I’ve listed and logged Ethernet devices information. I also have
        created a Java class that will log and throw an error in case of no
        Ethernet devices detected. In this project I’ve also written my first
        unit tests using Mockito and AssertJ.
      </p>
    </div>
  </Layout>
)

export default Prj8
