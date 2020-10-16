import { FunctionComponent } from 'react'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Hired and managed an engineering team of 11',
    'Built CI/CD and infrastructure as code using AWS CDK and Github Actions',
    'Built the music streaming web application using React',
    'Built the music streaming mobile application using React Native',
    'Built the REST Api using AWS ECS Python and Django',
    'Built the media transcoding microservice using AWS StepFunctions, ECS, Lambda, Typescript, and FFMPEG',
    'Built the search microservice using Lambda, Api Gateway, and Elasticsearch',
]

const ExperienceQuadio: FunctionComponent = () => (
    <ExperienceItem
        company="Quadio"
        position="CTO"
        dateRange="Jan 2019 - Sep 2020 (1 year 9 months)"
        summary="Music streaming application for emerging artists"
        accomplishments={accomplishments}
    />
)

export default ExperienceQuadio
