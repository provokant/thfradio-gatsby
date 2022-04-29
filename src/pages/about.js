import React from 'react';
import moment from 'moment';
import Container from './../components/container';
import Section from './../components/section';
import SEO from './../components/seo';
import Layout from '../layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

import { MDXRenderer } from 'gatsby-plugin-mdx';
import '../components/first-impression/first-impression.scss';

const About = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Section title="About" className="first-impression">
        <BackgroundImage
          Tag="section"
          id="first-impression"
          className="first-impression__mobile"
          fluid={data.about.heroImage.localFile.childImageSharp.fluid}
        >
          <Container>
            <div className="first-impression__mobile__claim">
              <div>
                <p className="text-white">{data.about.heroText.heroText}</p>
              </div>
            </div>
          </Container>
        </BackgroundImage>

        <Container>
          <div className="first-impression__grid">
            <div className="first-impression__grid__picture">
              <Img
                fluid={data.about.heroImage.localFile.childImageSharp.fluid}
                alt="THF Radio, Torhaus Berlin"
              />
            </div>
            <div className="first-impression__grid__claim">
              <div>
                <p>{data.about.heroText.heroText}</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section title="About THF Radio" className="bg-thfDarkBlue text-white">
        <Container>
          <p className=" uppercase text-3xl pb-12">{data.about.radioHeader}</p>
          <div className="grid grid-cols-2 gap-5">
            <p className="">
              <MDXRenderer>{data.about.radioText.childMdx.body}</MDXRenderer>
            </p>
            <p className="">
              <MDXRenderer>{data.about.radioLinks.childMdx.body}</MDXRenderer>
            </p>
          </div>
        </Container>
      </Section>

      <Img fluid={data.about.imageBanner.localFile.childImageSharp.fluid}></Img>
      <Section title="About Torhaus" className="bg-thfDarkBlue text-white">
        <Container>
          <p className=" uppercase text-3xl pb-12">
            {data.about.torhausHeader}
          </p>
          <div className="grid grid-cols-2 gap-5">
            <p className="">
              <MDXRenderer>{data.about.torhausText.childMdx.body}</MDXRenderer>
            </p>
            <p className="">
              <MDXRenderer>{data.about.torhausLinks.childMdx.body}</MDXRenderer>
            </p>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query About {
    about: contentfulAbout(slug: { eq: "about" }) {
      pageTitle
      heroImage {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      heroText {
        heroText
      }
      radioHeader
      radioText {
        childMdx {
          body
        }
      }
      radioLinks {
        childMdx {
          body
        }
      }
      imageBanner {
        localFile {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
      torhausHeader
      torhausText {
        childMdx {
          body
        }
      }
      torhausLinks {
        childMdx {
          body
        }
      }

      slug
    }
    heroImage: file(relativePath: { eq: "about_hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`;
