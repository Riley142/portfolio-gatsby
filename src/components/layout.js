import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1240,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>

        <footer
          style={{
            marginTop: `2rem`,
          }}
        > Riley Croft - Portfolio &nbsp; 
          {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">GatsbyJS</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
