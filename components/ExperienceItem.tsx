import { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const ExperienceItem = ({
    company,
    position,
    dateRange,
    summary,
    accomplishments,
}: {
    company: string
    position: string
    dateRange: string
    summary: string
    accomplishments: string[]
}): ReactElement => (
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
                <Typography variant="caption">{dateRange}</Typography>
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
