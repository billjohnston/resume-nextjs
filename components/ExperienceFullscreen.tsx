import { FunctionComponent } from 'react'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Helped with the acquisition vetting process',
    'Managed the Front-end team of 4 developers',
    'Built the REST Api using Python and Django',
    'Built the web client using React',
]

const ExperienceFullscreen: FunctionComponent = () => (
    <ExperienceItem
        company="Fullscreen"
        position="Sr. Software Developer"
        dateRange="Apr 2018 - Jan 2019 (10 months)"
        summary="Reelio was acquired to incorporate its application into Fullscreen's marketing workflow"
        accomplishments={accomplishments}
    />
)

export default ExperienceFullscreen
