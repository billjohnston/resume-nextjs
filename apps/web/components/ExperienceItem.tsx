import { FunctionComponent } from 'react'
import { Dayjs } from 'dayjs'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DateRange from './DateRange'

type ExperienceItem = {
    company: string
    position: string
    startDate: Dayjs
    endDate: Dayjs
    currentEmployer?: boolean
    summary: string
    accomplishments: string[]
}

const ExperienceItem: FunctionComponent<ExperienceItem> = ({
    company,
    position,
    startDate,
    endDate,
    currentEmployer = false,
    summary,
    accomplishments,
}) => (
    <Box pb={1}>
        <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={{ xs: 'flex-start', sm: 'flex-end' }}
        >
            <Typography variant="h6">
                {company} | {position}
            </Typography>
            <Box lineHeight={{ sm: 1.85 }} ml={{ sm: 2 }}>
                <Typography variant="caption">
                    <DateRange
                        startDate={startDate}
                        endDate={endDate}
                        present={currentEmployer}
                    />
                </Typography>
            </Box>
        </Box>
        <Typography variant="body1">{summary}</Typography>
        <ul>
            {accomplishments.map((accomplishment, i) => (
                <li key={i}>
                    <Typography variant="body1">{accomplishment}</Typography>
                </li>
            ))}
        </ul>
    </Box>
)

export default ExperienceItem
