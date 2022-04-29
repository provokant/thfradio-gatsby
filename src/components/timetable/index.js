import React from 'react';

import Container from '../container';
import Headline from '../headline';
import Section from '../section';

import './timetable.scss';
import TimetableGrouped from './timetable-group';
import TimetableWrapper from './timetable-wrapper';
import useAllShows from './timetable-hook-all-shows';

export const Timetable = () => {
  const { weekdaysThisAndNextWeek } = useAllShows();

  return (
    <Section title="timetable" className="bg-thfOrange">
      <Container>
        <Headline title="Programme" />
        <TimetableWrapper>
          <TimetableGrouped by={weekdaysThisAndNextWeek} />
        </TimetableWrapper>
      </Container>
    </Section>
  );
};

export default Timetable;
