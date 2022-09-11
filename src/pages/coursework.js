import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Box } from "@material-ui/core"

const CourseworkPage = () => {
  const courses = [
    {
      name: "Junior Fall 2022",
      courses: [
        {
          course: "CS 184",
          link: "https://shamulent.github.io/CS_Stat184_Fall22.html",
          description: "Introduction to Reinforcement Learning",
        },
        {
          course: "CS 279R",
          link: "https://www.seas.harvard.edu/computer-science/courses",
          description: "Research Topics in Human-Computer Interaction",
        },
        {
          course: "CS 121",
          link: "https://cs121.boazbarak.org/index.html",
          description: "Introduction to Theoretical Computer Science",
        },
        {
          course: "Gened 1104",
          link:
            "https://gened.fas.harvard.edu/classes/science-and-cooking-haute-cuisine-soft-matter-science",
          description:
            "Science and Cooking: From Haute Cuisine to Soft Matter Science",
        },
      ],
    },
    {
      name: "Sophomore Spring 2022",
      courses: [
        {
          course: "CS 96",
          link: "https://www.seas.harvard.edu/computer-science/courses",
          description:
            "System Design Projects: Machine Learning for Social Impact",
        },
        {
          course: "CS 179",
          link: "https://glassmanlab.seas.harvard.edu/cs179.html",
          description: "Design of Useful and Usable Interactive Systems",
        },
        {
          course: "Stat 111",
          link: "https://statistics.fas.harvard.edu/statistics-courses",
          description: "Introduction to Statistical Inference",
        },
        {
          course: "Gened 1110",
          link:
            "https://gened.fas.harvard.edu/classes/classical-mythology-myth-antiquity-and-today",
          description: "Classical Mythology: Myth in Antiquity and Today",
        },
        {
          course: "Chinese 123XB",
          link:
            "https://curiosity.lib.harvard.edu/archived-harvard-university-online-course-catalogs-courses/catalog/26-016b6137ac12e2a68f9510e7077a839e",
          description: "Intermediate Modern Chinese for Advanced Beginners",
        },
      ],
    },
    {
      name: "Sophomore Fall 2021",
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
          description: "Introduction to Probability",
        },
        {
          course: "Chinese BX",
          link: "https://locator.tlt.harvard.edu/course/colgsas-120305/",
          description: "Elementary Chinese for Advanced Beginners",
        },
      ],
    },
    {
      name: "Freshman Spring 2020",
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
      name: "Freshman Fall 2019",
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
