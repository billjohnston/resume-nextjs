import { ReactElement } from 'react'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Helped with acquisition vetting process',
    'Managed front end team of 4 developers',
    'Built REST Api using Python and Django',
    'Built web client in React',
]

const ExperienceFullscreen = (): ReactElement => (
    <ExperienceItem
        company="Fullscreen"
        position="Sr Software Developer"
        dateRange="Apr 2018 - Jan 2019 (10 months)"
        summary="Acquired Reelio to incorporate application into their marketing teams workflow"
        accomplishments={accomplishments}
    />
)

export default ExperienceFullscreen
