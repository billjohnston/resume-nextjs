import { FunctionComponent } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Typography from '@material-ui/core/Typography'

dayjs.extend(duration)

const DateRange: FunctionComponent<{
    startDate: Dayjs
    endDate: Dayjs
    present?: boolean
}> = ({ startDate, endDate, present }) => {
    const dateDisplayFormat = 'MMM YYYY'
    const finalEndDate = present ? dayjs() : endDate
    const timeDiff = dayjs.duration(finalEndDate.diff(startDate))
    const diffYears = timeDiff.years()
    const diffMonths = timeDiff.months()
    const yearStr = diffYears
        ? `${diffYears} year${diffYears > 1 ? 's' : ''}`
        : ''
    const monthStr = diffMonths
        ? `${diffMonths} month${diffMonths > 1 ? 's' : ''}`
        : ''
    const diffStr = `${yearStr}${yearStr ? ' ' : ''}${monthStr}`
    const displayStartDate = startDate.format(dateDisplayFormat)
    const displayEndDate = present
        ? 'Present'
        : finalEndDate.format(dateDisplayFormat)
    return (
        <Typography variant="caption">
            {displayStartDate} - {displayEndDate} ({diffStr})
        </Typography>
    )
}

export default DateRange
