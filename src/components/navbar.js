import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MdEmail } from "@react-icons/all-files/md/MdEmail"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin"
import { IconContext } from "@react-icons/all-files"
import "./navbar.css"

const Navbar = ({ siteTitle }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about-me/">About Me</Link>
          <Link to="/projects/">Projects</Link>
        </div>
        <IconContext.Provider
          value={{ 
            size: "25px",
            color: "#7d36cf",
            className: "nav-icons" }}
        >
          <div className="nav-icons">
            <a href="mailto:rileycroft@tutanota.com"><MdEmail /></a>
            <a href="https://github.com/Riley142" target={"_blank"}><SiGithub /></a>
            <a href="https://www.linkedin.com/in/riley-croft" target={"_blank"}><SiLinkedin /></a> 
          </div>
        </IconContext.Provider>
        {/* Implement in the future
        <DarkModeToggle></DarkModeToggle> */}
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: `Riley Croft - Software Developer`,
}

export default Navbar
