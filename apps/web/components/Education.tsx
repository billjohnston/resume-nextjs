import { FunctionComponent } from 'react'

import Typography from '@mui/material/Typography'

import ResumeSection from 'components/ResumeSection'

const Education: FunctionComponent = () => (
    <ResumeSection title="Education">
        <Typography variant="body1">
            Drexel University, Bachelor Information Systems 2004 - 2009
        </Typography>
    </ResumeSection>
)

export default Education
