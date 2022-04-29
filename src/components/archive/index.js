import React, { useContext } from 'react';

import { GlobalStateContext } from '../../context/global-context-provider';
import Container from '../container';
import Headline from '../headline';
import ReactPlayer from 'react-player';
import ButtonLink from '../button';
import './archive.scss';
import useAllArchive from './archive-hook-all';
import ArchiveChild from './archive-child';
import Section from '../section';
import { Link } from 'gatsby';

const Archive = ({ isDarkMode = false }) => {
  const { archiveSorted } = useAllArchive();
  const { archivePlays } = useContext(GlobalStateContext);

  const ArchiveChildren = () =>
    archiveSorted.map((show) => <ArchiveChild {...show} />);

  const ArchiveContainer = ({ children }) => (
    <div className="archive__inner">{children}</div>
  );

  return (
    <Section title="shows" className="bg-thfDarkBlue">
      {archivePlays && (
        <ReactPlayer
          url={archivePlays}
          className="archive__player"
          playing
          width="100%"
          height="60px"
          config={{
            mixcloud: {
              options: {
                light: !isDarkMode,
                mini: true,
              },
            },
          }}
        />
      )}
      <Container>
        <Headline title="Shows" />
        <div className="text-white w-full text-center">
          <p className="">
            Hear our full archive on our{' '}
            <a
              href="https://www.mixcloud.com/THFRadio/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100"
            >
              Mixcloud
            </a>{' '}
            page
          </p>
        </div>

        <ArchiveContainer>
          <ArchiveChildren />
        </ArchiveContainer>
        {/* <div className="pt-12">
          <ButtonLink title="Back to top" path="/#top">
            <span>Back to top</span>
          </ButtonLink>
        </div> */}
      </Container>
    </Section>
  );
};

export default Archive;
