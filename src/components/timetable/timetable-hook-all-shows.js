import { graphql, useStaticQuery } from "gatsby"
import { groupBy } from "lodash"
import dayjs from "dayjs"
import 'dayjs/locale/en-us'

var isSameOrAfter = require('dayjs/plugin/isSameOrAfter')
var isBetween = require('dayjs/plugin/isBetween')


dayjs.locale('en-us')
dayjs.extend(isSameOrAfter)
dayjs.extend(isBetween)

export const useAllShows = () => {
  const startOfToday = dayjs().startOf('day')
  const startOfThisWeek = dayjs().startOf('isoWeek')
  const endOfNextWeek = dayjs().add(1, 'weeks').endOf('isoWeek')

  const { allIcal } = useStaticQuery(graphql`
    {
      allIcal(
        sort: { order: ASC, fields: start }
        filter: { end: {}, start: {} }
      ) {
        showsAll: nodes {
          summary
          start
          end
          uid
          rrule
        }
      }
    }
  `);


let {showsAll} =  allIcal 

  const allGroupedWeekdays = groupBy(showsAll, ({ start }) =>
    dayjs(start).startOf('day')
  )
  const allUpcoming = showsAll.filter(({ start }) =>
    dayjs(start).isSameOrAfter(startOfToday)
  )
  const weekdaysAllUpcoming = groupBy(allUpcoming, ({ start }) =>
    dayjs(start).startOf('day')
  )
  const allThisAndNextWeek = showsAll.filter(({ start }) =>
    dayjs(start).isBetween(
      startOfThisWeek,
      endOfNextWeek
    )
  )
  const weekdaysThisAndNextWeek = groupBy(allThisAndNextWeek, ({ start }) =>
    dayjs(start).startOf('day').toISOString()
  ) 

  const nowPlaying = allUpcoming.find(({ start, end }) =>
    dayjs().isBetween(start, end)
  )
  const nextPlaying = allUpcoming
    .filter(({ start }) => dayjs().diff(start, 'day') < 0)
    .sort((a, b) => {
      return dayjs().diff(dayjs(b.start, 'day')) - dayjs().diff(dayjs(a.start,'day'))
    })[0]

  return {
    showsAll,
    allGroupedWeekdays,
    allUpcoming,
    weekdaysAllUpcoming,
    weekdaysThisAndNextWeek,
    nowPlaying,
    nextPlaying,
  };
};

export default useAllShows;
