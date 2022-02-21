import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiLinux } from "@react-icons/all-files/si/SiLinux";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiAnsible } from "@react-icons/all-files/si/SiAnsible";
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj4 = () => (
  <Layout>
    <Seo title="Project - Modem watcher" />
    <div className="project-page">
      <h3>Speed Test - Server</h3>
      <hr />
      <IconContext.Provider
        value={{
          size: "32px",
          className: "tech-stack",
        }}
      >
        <div className="cards-icons">
          <h5>
            <SiLinux /> &nbsp; Linux
          </h5>
          <h5>
            <SiPython /> &nbsp;Python
          </h5>
          <h5>
            <SiAnsible /> &nbsp;Ansible
          </h5>
        </div>
      </IconContext.Provider>
      <hr />
      <h4>Things done in the project :</h4>
      <ul>
        <li>Understand how everything works in our server repositories</li>
        <li>
          Research about:
          <ul>
            <li>Ansible</li>
            <li>Github Actions</li>
            <li>OVH cloud</li>
          </ul>
        </li>
        <li>Read & understand our python scripts</li>
        <li>
          Build the open stack image
          <ul>
            <li>install necessary tools using ansible scripts</li>
            <li>set up iptable rules</li>
          </ul>
        </li>
        <li>Deploy the server</li>
      </ul>
    </div>
  </Layout>
)

export default Prj4
