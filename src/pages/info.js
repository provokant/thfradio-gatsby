import React from "react"
import moment from "moment"
import Layout from "../layout"
import Container from "../components/container"
import CodeOfConduct from "../components/code-of-conduct"
import Section from "../components/section"
import Contact from "../components/contact"
import Headline from "../components/headline"

const ContactPage = () => {
  const currentHour = parseFloat(moment().format("HH"))
  const isNight = currentHour > 18 || currentHour < 7

  return (
    <Layout applyDarkMode={isNight}>
      <Section title="info" className="bg-thfDarkBlue">
        <Container>
          <Headline title="Info"/>
          <Contact/>
        </Container>
        <Container>
          <Headline title="Code Of Conduct"/>
          <CodeOfConduct/>
        </Container>
      </Section>
    </Layout>
  )
}

export default ContactPage
