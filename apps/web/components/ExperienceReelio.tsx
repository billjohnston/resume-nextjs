import { FunctionComponent } from 'react'
import dayjs from 'dayjs'
import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'First developer hired; helped grow the engineering team to 15',
    'Managed the Front-end team of 4 developers',
    'Built the REST Api using Python and Django',
    'Built the web client using both Angular and React',
]

const startDate = dayjs('2013-03')
const endDate = dayjs('2018-04')

const ExperienceReelio: FunctionComponent = () => (
    <ExperienceItem
        company="Reelio"
        position="FullStack Developer"
        startDate={startDate}
        endDate={endDate}
        summary="Influencer marketing management application"
        accomplishments={accomplishments}
    />
)

export default ExperienceReelio
