import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => {

  const data = useStaticQuery(graphql`
      {
          github {
              user(login: "Kev-Y-Huang") {
                  repository(name: "kev-y-huang.github.io") {
                      id
                      url
                      updatedAt
                  }
              }
          }
      }
  `)

  return (
    <Layout>
      <SEO title="Project Page"/>
      <h1>Projects:</h1>
      <p>{data.github.user.repository.url}</p>
    </Layout>
  )
}

export default ProjectPage
