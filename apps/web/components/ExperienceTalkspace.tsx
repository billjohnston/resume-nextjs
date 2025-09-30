import { FunctionComponent } from 'react'
import dayjs from 'dayjs'
import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Authored RFCs, planned sprints, and led developers in the implementation of new features',
    'Built video call transcription service using AWS StepFunctions, ECS, Lambda, Typescript',
    'Built multi-region scheduled job service using AWS Event Rules, Lambda, DynamoDB, API Gateway, and React Admin',
    'Built SAML single sign on service using AWS Cognito, Lambda',
    'Migrated custom authentication to AWS Cognito',
]

const startDate = dayjs('2020-12')
const endDate = dayjs('2022-09')

const ExperienceTalkspace: FunctionComponent = () => (
    <ExperienceItem
        company="Talkspace"
        position="Senior Software Engineer, Tech Lead"
        startDate={startDate}
        endDate={endDate}
        summary="#1 Rated Online Therapy"
        accomplishments={accomplishments}
    />
)

export default ExperienceTalkspace
