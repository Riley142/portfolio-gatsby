import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiReact } from "@react-icons/all-files/si/SiReact"
import { SiJest } from "@react-icons/all-files/si/SiJest"
import { SiCss3 } from "@react-icons/all-files/si/SiCss3"
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5"
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const Prj9 = () => (
  <Layout>
    <Seo title="Project - Suport Page" />
    <div className="project-page">
      <h3>Support Page</h3>
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
            <SiJest /> &nbsp; Jest
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
      <h4>Things done in the project :</h4>
      <ul>
        <li>Created a React component & add JSX/HTML with page’s content</li>
        <li>Styled page using CSS</li>
        <li>Made page responsive on smaller screens & tablets</li>
        <li>Used	AJAX for contact form (Axios library API)k</li>
        <li>Tested the contact	form</li>
        <li>Wrote necessary unit testst</li>
      </ul>
    </div>
  </Layout>
)

export default Prj9
