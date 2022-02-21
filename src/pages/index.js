import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { SiRust } from "@react-icons/all-files/si/SiRust";
import { SiJava } from "@react-icons/all-files/si/SiJava";
import { SiGnubash } from "@react-icons/all-files/si/SiGnubash";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { IconContext } from "@react-icons/all-files"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="home">
    <div className="home-wrapper">
      <div className="home-text">
        <h1>
          Hello! I'm Riley 👋
          <br />
          I'm a junior <span className="dev"> Software Developer </span>
          <br />
          working at Albeego 🐝 <br />
        </h1>
        
        <h3>
          Main languages I work with
        </h3>

          <IconContext.Provider
          value={{ 
            size: "32px", 
            className: "tech-stack" }}
          >
          <div className="tech-stack-icons">
            <h4><SiRust /> &nbsp;Rust </h4>
            <h4> <SiJava /> &nbsp;Java</h4>
            <h4> <SiReact /> &nbsp;React</h4>
            <h4> <SiGnubash /> &nbsp;Bash</h4>
          </div>
          </IconContext.Provider>
      </div>

      <div className="home-img">
        <StaticImage
          src="../images/memojiPurple.png"
          layout="fixed"
          width={250}
          height={200}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Emoji"
        />
        <div className="empty-div"></div>
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage
