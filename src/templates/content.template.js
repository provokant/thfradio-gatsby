import { graphql } from "gatsby"
import React from "react"
import marked from "marked"
import moment from "moment"

import Layout from "../layout"
import SEO from "../components/seo"
import Container from "../components/container"
import Section from "../components/section"

export default class ContentPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { lang } = pageContext
    const { contentfulStaticPage } = data
    const { title, description, text } = contentfulStaticPage
    const markdown = marked(text.text)

    const currentHour = parseFloat(moment().format("HH"))
    const isNight = currentHour > 18 || currentHour < 7

    return (
      <Layout applyDarkMode={isNight}>
        <SEO title={title} description={description} lang={lang}></SEO>
        <Section title="content">
          <Container>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: markdown }} />
          </Container>
        </Section>
      </Layout>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query ContentPageQuery($slug: String!) {
    contentfulStaticPage(fields: { slug: { eq: $slug } }) {
      text {
        text
      }
      title
      description
    }
  }
`