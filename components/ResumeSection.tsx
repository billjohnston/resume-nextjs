import { FunctionComponent } from 'react'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'

type ResumeSectionProps = {
    title: string
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
