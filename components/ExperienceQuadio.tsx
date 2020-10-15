import { ReactElement } from 'react'
import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Hired and managed engineering team of 11',
    'Built CI/CD and infrastructure as code using AWS CDK and Github Actions',
    'Built React music streaming web application',
    'Built React Native music streaming mobile application',
    'Built REST Api using AWS ECS Python and Django',
    'Built media transcoding microservice using AWS StepFunctions, ECS, Lambda, Typescript, and FFMPEG',
    'Built search microservice using Lambda, Api Gateway and Elasticsearch',
]

const ExperienceQuadio = (): ReactElement => (
    <ExperienceItem
        company="Quadio"
        position="CTO"
        dateRange="Jan 2019 - Sep 2020 (1 year 9 months)"
        summary="Music streaming application for emerging artists"
        accomplishments={accomplishments}
    />
)

export default ExperienceQuadio
