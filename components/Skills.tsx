import { FunctionComponent } from 'react'

import Typography from '@material-ui/core/Typography'

import ResumeSection from 'components/ResumeSection'

const skills = [
    'AWS',
    'AWS CDK',
    'Cloudformation',
    'Javascript',
    'Node.js',
    'TypeScript',
    'Dynamodb',
    'ECS',
    'Docker',
    'Lambda',
    'SQS',
    'Api Gateway',
    'Step Functions',
    'React',
    'React Native',
    'Material UI',
    'Cognito',
    'Amplify',
    'Elasticsearch',
    'FFmpeg',
    'Streaming Media',
    'Jest',
]

const Skills: FunctionComponent = () => (
    <ResumeSection title="Skills">
        <Typography variant="body1">{skills.join(' • ')}</Typography>
    </ResumeSection>
)

export default Skills
