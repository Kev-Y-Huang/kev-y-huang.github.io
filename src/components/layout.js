/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Sidebar from "./sidebar"
import "./layout.css"
import layoutStyle from "./style/layout.module.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
                  menuLinks {
                      name
                      link
                  }
              }
          }
      }
  `)

  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.sidebar}>
        <Sidebar menuLinks={data.site.siteMetadata.menuLinks}/>
      </div>
      <div className={layoutStyle.content}>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
