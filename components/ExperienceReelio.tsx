import { ReactElement } from 'react'
import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'First developer hired, helped grow to team of 15',
    'Managed front end team of 4 developers',
    'Built REST Api using Python and Django',
    'Built web client in both Angular and React',
]

const ExperienceReelio = (): ReactElement => (
    <ExperienceItem
        company="Reelio"
        position="FullStack Developer"
        dateRange="Mar 2013 - Apr 2018 (5 years 2 months)"
        summary="Influencer marketing management application"
        accomplishments={accomplishments}
    />
)

export default ExperienceReelio
