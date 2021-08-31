import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box } from "@material-ui/core"

const CourseworkPage = () => {
  const courses = [
    {
      name: "Fall 2021",
      courses: [
        {
          course: "MIT 6.036",
          link: "https://canvas.mit.edu/courses/7509/wiki",
          description: "Introduction to Machine Learning",
        },
        {
          course: "CS 61",
          link: "https://cs61.seas.harvard.edu/site/2021/",
          description: "Systems Programming and Machine Organization",
        },
        {
          course: "Stat 110",
          link: "https://projects.iq.harvard.edu/stat110/home",
          description: "Probability",
        },
        {
          course: "Chinese BX",
          link: "https://locator.tlt.harvard.edu/course/colgsas-120305/",
          description: "Elementary Chinese for Advanced Beginners",
        },
      ],
    },
    {
      name: "Spring 2020",
      courses: [
        {
          course: "Math 25b",
          link: "https://www.math.harvard.edu/course/mathematics-25b/",
          description: "Theoretical Linear Algebra and Real Analysis II",
        },
        {
          course: "CS 124",
          link: "http://sites.fas.harvard.edu/~libcs124/cs124/index.html",
          description: "Data Structures and Algorithms",
        },
        {
          course: "Econ 50",
          link:
            "https://www.vox.com/the-highlight/2019/5/14/18520783/harvard-economics-chetty",
          description: "Using Big Data to Solve Economic and Social Problems",
        },
        {
          course: "Gened 1023",
          link:
            "https://gened.fas.harvard.edu/classes/ignorance-lies-hogwash-and-humbug",
          description: "Ignorance, Lies, Hogwash, and Humbug",
        },
      ],
    },
    {
      name: "Fall 2019",
      courses: [
        {
          course: "Math 25a",
          link: "https://www.math.harvard.edu/course/mathematics-25a/",
          description: "Theoretical Linear Algebra and Real Analysis I",
        },
        {
          course: "CS 50",
          link: "https://cs50.harvard.edu/",
          description: "Introduction to Computer Science",
        },
        {
          course: "Expos 50",
          link: "https://writingprogram.fas.harvard.edu/pages/expos-20-0",
          description: "Privacy and Surveillance",
        },
        {
          course: "Freshman Seminar 41R",
          link:
            "https://scholar.harvard.edu/mbaum/classes/frsemr-41r-freshman-seminar-media-american-politics",
          description: "Media in American Politics",
        },
      ],
    },
  ]

  return (
    <Layout>
      <SEO title="Coursework Page" />
      <h1>Coursework:</h1>
      {courses &&
        courses.map(semester => (
          <Box>
            <h2>{semester.name}</h2>
            <ul>
              {semester &&
                semester.courses.map(course => (
                  <li>
                    <a href={course.link}>{course.course}</a>:{" "}
                    {course.description}
                  </li>
                ))}
            </ul>
          </Box>
        ))}
    </Layout>
  )
}

export default CourseworkPage
