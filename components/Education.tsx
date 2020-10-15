import { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'

import ResumeSection from 'components/ResumeSection'

const Education = (): ReactElement => (
    <ResumeSection title="Education">
        <Typography variant="body1">
            Drexel University, Bachelor Information Systems 2004 - 2009
        </Typography>
    </ResumeSection>
)

export default Education
