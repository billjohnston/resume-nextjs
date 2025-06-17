import { FunctionComponent } from 'react'

import Typography from '@mui/material/Typography'

import ResumeSection from 'components/ResumeSection'

const skills = [
    'AWS',
    'AWS CDK',
    'Cloudformation',
    'TypeScript',
    'Javascript',
    'Node.js',
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
    'Elasticsearch',
    'FFmpeg',
    'Audio / Video Streaming',
    'Jest',
]

const Skills: FunctionComponent = () => (
    <ResumeSection title="Skills">
        <Typography variant="body1">{skills.join(' • ')}</Typography>
    </ResumeSection>
)

export default Skills
