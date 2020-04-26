import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description = "", meta = [], lang = "en" }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            lang
            title
          }
        }
      }
    `
  )

  const { siteMetadata } = site
  const metaDescription = description || siteMetadata.description
  const metaLang = lang || siteMetadata.lang

  return (
    <Helmet
      htmlAttributes={{
        lang: metaLang,
      }}
      title={title ? title : siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {/* <script src="//widget.mixcloud.com/media/js/footerWidgetApi.js" async>
        {`{"feed": "/thfradio/"}`}
      </script> */}
      <script src="https://widget.mixcloud.com/media/js/footerWidgetApi.js" />
      <script type="text/javascript">
        const mc = Mixcloud.FooterWidget("/thfradio/")
        mc.then(function(widget) {
          // Put code that interacts with the widget here e.g.
          // widget.events.pause.on(console.log('test'))
          console.log('test')
        });
      </script>
      {/* <script src="https://widget.mixcloud.com/media/js/widgetApi.js" type="text/javascript"></script> */}
    </Helmet>
  )
}

export default SEO
