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
        Outside of class, I'm Vice President of <a href={"http://hodp.org/"}>Harvard Open Data Project</a>,
        Managing Director of Diligence in <a href={"https://www.harvardcap.org/"}>Harvard Undergraduate Capital Partners</a>,
        and a developer on the algorithm team for <a href={"https://datamatch.me/"}>Datamatch</a>.
        I'm passionate about all things tech, music, and cycling.
      </div>
      <br/>
      <div>
        This past summer, I was a <b>Software Development Intern</b> at <a href={'https://www.gem.com/'}><b>Gem</b></a>.
        There, I built Gem's first ML feature on their flagship recruiting product. Prior to that, I spent a year
        at <b>Shutterfly</b> as a <b>Software Developer Contractor</b> on the Manufacturing Platform team.
      </div>
    </div>
  </Layout>
)

export default IndexPage
