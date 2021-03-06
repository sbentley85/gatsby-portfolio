import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import aboutStyles from "./about.module.scss"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={aboutStyles.aboutContainer}>
        <p className={aboutStyles.aboutTest}>
          My name is Simon, I'm a web developer based in London.
        </p>

        <p>
          I am a self-educated web developer versed in using a range of modern
          technologies looking for a new opportunity. Web Development began as a
          skill I was interested in developing and led to a career path I wanted
          to follow. I am a trained and qualified accountant who has always
          enjoyed the analytical and problem-solving aspect of finance. I have a
          hunger to learn new skills and I am eager to add to my current skill
          set and find a role that will allow me to excel.
        </p>
        <p>
          I'm currently looking for a role as a web developer so if you'd like
          to discuss what I can bring to your company or project please{" "}
          <Link to="/contact">get in touch</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
