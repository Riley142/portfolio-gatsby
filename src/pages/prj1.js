import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiJava } from "@react-icons/all-files/si/SiJava"
import { BiTestTube } from "@react-icons/all-files/bi/BiTestTube"
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash"
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj1 = () => (
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
        I have written program that subscribes to output of a modem watcher, to
        create a list of connected devices. It checked the state every 5
        seconds, if a modem is disconnected it tears down the connected modem
        connections and reconnects.
      </p>
      <h4>Things done in the project :</h4>
      <ul>
        <li>
        A java class to monitor connected modems
        <ul>
          <li>created a list of connected modems, that takes connected modems </li>
          <li>created a rxJava flowable over the list of modems</li>
        </ul>
        </li>
        <li>A java class to read a live status from the modems to check their state</li>
        <li>A java class mapper to get data needed from a class that reads the live status</li>
        <li>Analyse Modem Watcher to see what rules need to be torn down</li>
        <li>Tear down the modems </li>
        <li>Reconnected modems that lost connection and were teared down</li>
        <li>Logged necessary information using slf4j</li>
        <li>Unit tests using Mockito & AssertJ</li>
      </ul>
    </div>
  </Layout>
)

export default Prj1
