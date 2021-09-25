import { useState } from 'react'
// import { ContentHeader } from '../../../components/index'

/**
  weekDateRange: {
    startWeekDate: __,
    endWeekDate: __,
  }
  employeeWeekDates: [
    {
      employee: { ...userInfo }, //access through AuthContext
      tuesday: {
        startHour: __,
        endHour: __,
        mealHour: __
      },
      wednesday:  { _asAbove_ },
      thursday:   { _asAbove_ },
      friday:     { _asAbove_ },
      saturday:   { _asAbove_ },
      sunday:     { _asAbove_ },
      monday:     { _asAbove_ },
      totalHours: __
    }
  ]
 */

const ScheduleManager = () => {
  // states should be handled with either context, zustang, or redux. you decide.
  const [weekDateRange, setWeekDateRange] = useState({})
  const [employeeWeekDates, setEmployeeWeekDates] = useState([])

  // useEffect fetching the data to initialize the states

  // functions to handle schedule editing (handle state management)

  return (
    <div>
      <p>ScheduleManager Component</p>
      {/* section for the weekDateRange component and the buttons */}

      {/* section for the scheduleTable and approve button */}

      {/* section for the ScheduleEditModal portal component */}
    </div>
  )
}

export default ScheduleManager
