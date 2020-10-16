import { FunctionComponent } from 'react'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Built custom marketing applications for artists including Third Eye Blind and Florence and the Machine',
    'Created a CMS to generate common marketing applications using Wordpress; still in use today',
]

const ExperienceSneakAttackMedia: FunctionComponent = () => (
    <ExperienceItem
        company="Sneak Attack Media"
        position="FullStack Developer"
        dateRange="Nov 2010 - Mar 2013 (2 years 5 months)"
        summary="Social media marketing applications for musicians"
        accomplishments={accomplishments}
    />
)

export default ExperienceSneakAttackMedia
