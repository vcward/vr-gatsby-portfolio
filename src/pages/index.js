import * as React from "react"
import Layout from "../components/layout"
import About from "../components/about"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default IndexPage
