import { FunctionComponent, ReactNode } from 'react' // Import ReactNode

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

type ResumeSectionProps = {
    title: string
    children: ReactNode // Add children prop
}

const ResumeSection: FunctionComponent<ResumeSectionProps> = ({
    title,
    children,
}) => (
    <Box pt={1} pb={2}>
        <Box pb={1}>
            <Typography variant="h5">{title}</Typography>
            <Divider />
        </Box>
        <Box>{children}</Box>
    </Box>
)

export default ResumeSection
