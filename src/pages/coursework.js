import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CourseworkPage = () => (
  <Layout>
    <SEO title="Coursework Page"/>
    <h1>Coursework:</h1>
    <h2>Spring 2020</h2>
    <ul>
      <li><a href={"https://www.math.harvard.edu/course/mathematics-25b/"}>Math 25b</a>: Theoretical Linear Algebra and
        Real Analysis II
      </li>
      <li><a href={"http://sites.fas.harvard.edu/~libcs124/cs124/index.html"}>CS 124</a>: Data Structures and Algorithms
      </li>
      <li><a href={"https://www.vox.com/the-highlight/2019/5/14/18520783/harvard-economics-chetty"}>Econ 50</a>: Using
        Big Data to Solve Economic and Social Problems
      </li>
      <li><a href={"https://gened.fas.harvard.edu/classes/ignorance-lies-hogwash-and-humbug"}>Gened 1023</a>: Ignorance,
        Lies, Hogwash, and Humbug
      </li>
    </ul>
    <h2>Fall 19</h2>
    <ul>
      <li>
        <a href={"https://www.math.harvard.edu/course/mathematics-25a/"}>Math 25a</a>: Theoretical Linear Algebra and
        Real Analysis I
      </li>
      <li>
        <a href={"https://cs50.harvard.edu/"}>CS 50</a>: Introduction to Computer Science
      </li>
      <li>
        <a href={"https://writingprogram.fas.harvard.edu/pages/expos-20-0"}>Expos 20</a>: Privacy and Surveillance
      </li>
      <li>
        <a href={"https://scholar.harvard.edu/mbaum/classes/frsemr-41r-freshman-seminar-media-american-politics"}>Freshman
          Seminar 41R</a>: Media in American Politics
      </li>
    </ul>
  </Layout>
)

export default CourseworkPage
