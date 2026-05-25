import { FunctionComponent } from 'react'
import dayjs from 'dayjs'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Joined via acquisition of Reelio, contributing to full-stack feature development integrating Reelio\'s influencer marketing application into Fullscreen\'s creator economy platform',
    'Managed the front-end team of 4 developers',
    'Built the REST API using Python and Django',
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
