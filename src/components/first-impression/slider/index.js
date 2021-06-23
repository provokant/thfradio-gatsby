import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick";
import Img from "gatsby-image"

import "./slick-theme.css"
import "./slick.css"

const FirstImpresssionSlider = () => {
    const { image1, image2, image3 } = useStaticQuery(
      graphql`
  query Slider {
      image1:file(relativePath: {eq: "landingpage.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      },
      image2:file(relativePath: {eq: "landingpage2.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      },
      image3:file(relativePath: {eq: "landingpage3.jpg"}) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      },
  }
  `)

const settings = {
    autoPlay: false,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

    return (
      <div>
        <Slider {...settings}>
          <div>
          <Img fluid={image1.childImageSharp.fluid} alt="THF Radio, Torhaus Berlin"/>
          </div>
          <div>
          <Img fluid={image2.childImageSharp.fluid} alt="THF Radio, Torhaus Berlin"/>
          </div>
          <div>
            <Img fluid={image3.childImageSharp.fluid} alt="THF Radio, Torhaus Berlin"/>
            </div>
        </Slider>
      </div>
   )}

  export default FirstImpresssionSlider
