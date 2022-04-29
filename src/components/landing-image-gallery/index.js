import React from 'react';
import Container from '../container';
import Section from '../section';
import './first-impression.scss';
import Img from 'gatsby-image';
import ButtonLink from '../button/index';
import BackgroundImage from 'gatsby-background-image';
import useImages from './landing-image-gallery-hook';
// import FirstImpresssionSlider from "./slider"

export const LandingImageGallery = () => {
  const { gridImage } = useSingleImage();

  return (
    <Section
      title="first impression"
      id="first-impression"
      className="first-impression"
    >
      <BackgroundImage
        Tag="section"
        id="first-impression"
        className="first-impression__mobile"
        fluid={imageDefault.childImageSharp.fluid}
      >
        <Container>
          <div className="first-impression__mobile__claim">
            <div>
              <p>
                We are a community radio station at the gatehouse of Tempelhof
                Airport
              </p>
              {/* <p className="first-impression__mobile__claim__german">
                Wir sind ein Community Radio im Torhaus am Flughafen Tempelhof
              </p> */}
            </div>
          </div>
        </Container>
      </BackgroundImage>

      <Container>
        <div className="first-impression__grid">
          <div className="first-impression__grid__claim">
            <div>
              <p>
                We are a community radio station at the gatehouse of Tempelhof
                Airport
              </p>
              {/* <p className="first-impression__grid__claim__german">
                Wir sind ein Community Radio im Torhaus am Flughafen Tempelhof
              </p> */}
            </div>
          </div>
          <div className="first-impression__grid__picture">
            <Img
              fluid={gridImage.childImageSharp.fluid}
              alt="THF Radio, Torhaus Berlin"
            />
          </div>
          <ButtonLink title="Über uns" path="/info">
            <span>About us</span>
          </ButtonLink>
          <ButtonLink title="Aus dem Archiv" path="/#shows">
            <span>Listen to the shows</span>
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
};

export default LandingImageGallery;
