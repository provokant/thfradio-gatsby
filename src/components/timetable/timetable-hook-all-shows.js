import { graphql, useStaticQuery } from "gatsby"
import { groupBy } from "lodash"
import moment from "moment"

moment.locale('de')

export const useAllShows = () => {
  const startOfToday = moment().startOf('day')
  const startOfThisWeek = moment().startOf('isoWeek')
  const endOfNextWeek = moment().add(1, 'weeks').endOf('isoWeek')

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
  `)

// keeping this in comments in case team up shifts times again
// let showsAll;
// moment().isDST()
//  ? showsAll = allIcal.showsAll.map(x=>({...x, start:moment(x.start).add(!isNull(x.rrule)?0:moment().utcOffset(),'m'), end:moment(x.end).add(!isNull(x.rrule)?0:moment().utcOffset(),'m')})) 
//  : {showsAll}=allIcal

console.log("start of day", startOfToday)

let {showsAll} =  allIcal 

  const allGroupedWeekdays = groupBy(showsAll, ({ start }) =>
    moment(start).startOf('day')
  )
  const allUpcoming = showsAll.filter(({ start }) =>
    moment(start).isSameOrAfter(startOfToday)
  )
  const weekdaysAllUpcoming = groupBy(allUpcoming, ({ start }) =>
    moment(start).startOf('day')
  )
  const allThisAndNextWeek = showsAll.filter(({ start }) =>
    moment(start).isBetween(
      startOfThisWeek,
      endOfNextWeek
    )
  )
  const weekdaysThisAndNextWeek = groupBy(allThisAndNextWeek, ({ start }) =>
    moment(start).startOf('day')
  )
  const nowPlaying = allUpcoming.find(({ start, end }) =>
    moment().isBetween(start, end)
  )
  console.log("now playing", nowPlaying)

  const nextPlaying = allUpcoming
    .filter(({ start }) => moment().diff(start) < 0)
    .sort((a, b) => {
      return moment().diff(moment(b.start)) - moment().diff(moment(a.start))
    })[0]

  return {
    showsAll,
    allGroupedWeekdays,
    allUpcoming,
    weekdaysAllUpcoming,
    weekdaysThisAndNextWeek,
    nowPlaying,
    nextPlaying
  }
}

export default useAllShows








