import React from "react"
import Typewriter from "typewriter-effect"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <h1>
      <Typewriter
        options={{
          strings: ["Hi, my name is Kevin!"],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
    <div className={"description"}>
      <div>
        I'm a <b>junior</b> at <b>Harvard University</b> studying <b>computer science</b> with a secondary in <b>math</b>.
      </div>
      <br />
      <div>
        Outside of class, I am President of{" "} <a href={"http://hodp.org/"}>Harvard Open Data Project</a> and an Undergraduate NLP Researcher at Boston Children's Hospital. I'm passionate{" "}
        about all things tech, music, and cycling.
      </div>
      <br />
      <div>
        This upcoming summer, I will be working at <b>Roblox</b> as a <b>Software Engineer Intern</b>. This past summer, I was a <b>Software Engineer Intern</b> at <b>Meta</b> where I worked on{" "}
        optimizing the user-privacy infrastructure. Previously, I was a <b>Software Engineer Intern</b> at <a href={"https://www.gem.com/"}><b>Gem</b></a> where I built Gem's first ML feature on{" "}
        their flagship recruiting product. Prior to that, I spent a year at <b>Shutterfly</b> as a <b>Software Developer Contractor</b> on the Manufacturing Platform team.
      </div>
    </div>
  </Layout>
)

export default IndexPage
