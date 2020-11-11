import React from "react"
import Typewriter from "typewriter-effect"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page"/>
    <h1>
      <Typewriter
        options={{
          strings: ["Hi, my name is Kevin!"],
          autoStart: true,
          loop: true
        }}
      />
    </h1>
    <div className={"description"}>
      <div>
        I'm a <b>rising sophomore</b> at <b>Harvard University</b> planning to study <b>computer
        science</b> and <b>math</b>.
      </div>
      <br/>
      <div>
        Outside of class, I'm technical director of <a href={"http://hodp.org/"}>Harvard Open Data Project</a>,
        a principal in <a href={"https://www.harvardcap.org/"}>Harvard Undergraduate Capital Partners</a>,
        and a developer for <a href={"https://datamatch.me/"}>Datamatch</a>.
        I'm passionate about all things tech, music, and cycling.
      </div>
      <br/>
      <div>
        Currently, I'm taking a <b>gap year</b> and will be working at <b>Shuttefly</b> as a <b>Software Developer Contractor</b>
        while continuing to work with Harvard clubs/organizations and coding personal projects.
      </div>
    </div>
  </Layout>
)

export default IndexPage
