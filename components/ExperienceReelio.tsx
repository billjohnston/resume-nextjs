import { FunctionComponent } from 'react'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'First developer hired; helped grow the engineering team to 15',
    'Managed the Front-end team of 4 developers',
    'Built the REST Api using Python and Django',
    'Built the web client using both Angular and React',
]

const ExperienceReelio: FunctionComponent = () => (
    <ExperienceItem
        company="Reelio"
        position="FullStack Developer"
        dateRange="Mar 2013 - Apr 2018 (5 years 2 months)"
        summary="Influencer marketing management application"
        accomplishments={accomplishments}
    />
)

export default ExperienceReelio
