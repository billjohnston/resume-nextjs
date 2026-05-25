import { FunctionComponent } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import ResumeSection from 'components/ResumeSection'

const skillGroups = [
    { label: 'Cloud & Infra', skills: ['AWS', 'AWS CDK', 'Cloudformation', 'Lambda', 'ECS', 'SQS', 'Api Gateway', 'Step Functions', 'DynamoDB', 'Cognito', 'Docker'] },
    { label: 'Languages', skills: ['TypeScript', 'Javascript', 'Node.js', 'Bun'] },
    { label: 'Frontend', skills: ['React', 'React Native', 'Expo', 'Material UI'] },
    { label: 'Search & Testing', skills: ['Elasticsearch', 'Jest'] },
    { label: 'AI', skills: ['Claude API', 'Claude Code', 'MCP', 'LLM Integration', 'Prompt Engineering', 'AI-Assisted Development'] },
]

const Skills: FunctionComponent = () => (
    <ResumeSection title="Skills">
        {skillGroups.map(({ label, skills }) => (
            <Box key={label} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} mb={0.5}>
                <Typography variant="body1" fontWeight="bold" sx={{ minWidth: 140 }}>
                    {label}:
                </Typography>
                <Typography variant="body1">{skills.join(' • ')}</Typography>
            </Box>
        ))}
    </ResumeSection>
)

export default Skills
