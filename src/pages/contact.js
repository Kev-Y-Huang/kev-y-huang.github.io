import React from "react"
import Kevin_Huang_Resume from "../images/Kevin_Huang_Resume.pdf"
import {
  Linkedin,
  Gmail,
  Github,
  Googledrive,
} from "@icons-pack/react-simple-icons"

import Layout from "../components/layout"
import SEO from "../components/seo"
import contactStyle from "../components/style/contact.module.scss"

const links = [
  {
    icon: Linkedin,
    name: "Linkedin",
    address: "https://www.linkedin.com/in/kev-y-huang/",
  },
  { icon: Github, name: "Github", address: "https://github.com/Kev-Y-Huang/" },
  {
    icon: Gmail,
    name: "Email",
    address: "mailto:kevin_huang@college.harvard.edu/",
  },
  { icon: Googledrive, name: "Resume", address: Kevin_Huang_Resume },
]

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>You can reach me at:</h1>
    <nav className={contactStyle.link}>
      {links.map(link => (
        <li key={link.name}>
          <div>
            <a href={link.address} target={"_blank"} rel={"noreferrer"}>
              <link.icon size={48} />
              <p>{link.name}</p>
            </a>
          </div>
        </li>
      ))}
    </nav>
  </Layout>
)

export default ContactPage
