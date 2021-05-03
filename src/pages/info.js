import React from "react"
import moment from "moment"
import Layout from "../layout"
import Container from "../components/container"
import Section from "../components/section"
import ContactForm from "../components/contact/contactForm"
import Contact from "../components/contact"
import Headline from "../components/headline"

const ContactPage = () => {
  const currentHour = parseFloat(moment().format("HH"))
  const isNight = currentHour > 18 || currentHour < 7

  return (
    <Layout applyDarkMode={isNight}>
         <Section title="info">
          <Container>
          <Headline title="Info"/>
          <Contact />
          {/* <ContactForm /> */}
          </Container>
        </Section>
    </Layout>
  )
}

export default ContactPage
