import { FunctionComponent } from 'react'
import dayjs from 'dayjs'
import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Wrote RFCs, planned sprints, and managed developers for new features',
    'Built video call transcription service using AWS StepFunctions, ECS, Lambda, Typescript',
    'Built multi-region scheduled job service using AWS Event Rules, Lambda, DynamoDB, API Gateway, and React Admin',
    'Built SAML single sign on service using AWS Cognito, Lambda',
    'Migrated custom authentication services to AWS Cognito',
]

const startDate = dayjs('2020-12')
const endDate = dayjs()

const ExperienceFullscreen: FunctionComponent = () => (
    <ExperienceItem
        company="Talkspace"
        position="Senior Software Engineer, Tech Lead"
        startDate={startDate}
        endDate={endDate}
        summary="#1 Rated Online Therapy"
        accomplishments={accomplishments}
        currentEmployer
    />
)

export default ExperienceFullscreen
