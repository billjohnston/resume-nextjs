import { FunctionComponent } from 'react'
import dayjs from 'dayjs'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Built custom marketing applications for artists including Third Eye Blind and Florence and the Machine',
    'Created a CMS to generate common marketing applications using Wordpress; still in use today',
]

const startDate = dayjs('2010-11')
const endDate = dayjs('2013-03')

const ExperienceSneakAttackMedia: FunctionComponent = () => (
    <ExperienceItem
        company="Sneak Attack Media"
        position="FullStack Developer"
        startDate={startDate}
        endDate={endDate}
        summary="Social media marketing applications for musicians"
        accomplishments={accomplishments}
    />
)

export default ExperienceSneakAttackMedia
