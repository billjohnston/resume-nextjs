import { FunctionComponent } from 'react'
import dayjs from 'dayjs'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Helped with the acquisition vetting process',
    'Managed the Front-end team of 4 developers',
    'Built the REST Api using Python and Django',
    'Built the web client using React',
]

const startDate = dayjs('2018-04')
const endDate = dayjs('2019-01')

const ExperienceFullscreen: FunctionComponent = () => (
    <ExperienceItem
        company="Fullscreen"
        position="Sr. Software Developer"
        startDate={startDate}
        endDate={endDate}
        summary="Reelio was acquired to incorporate its application into Fullscreen's marketing workflow"
        accomplishments={accomplishments}
    />
)

export default ExperienceFullscreen
