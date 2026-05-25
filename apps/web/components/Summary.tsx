import { FunctionComponent } from 'react'

import Typography from '@mui/material/Typography'

import ResumeSection from 'components/ResumeSection'

const Summary: FunctionComponent = () => (
    <ResumeSection title="Summary">
        <Typography variant="body1">
            Director of Engineering based in NYC specializing in serverless AWS
            architecture and AI-powered product development. Former CTO and
            founding engineer at two successful startups; proven track record of
            building products from zero to scale and growing engineering teams.
            {/* Find my resume&apos;s source code here:{' '}
            <Link
                target="_blank"
                href="https://github.com/billjohnston/resume-nextjs"
            >
                React/Nextjs client
            </Link>{' '}
            and{' '}
            <Link
                target="_blank"
                href="https://github.com/billjohnston/resume-cdk"
            >
                AWS CDK web host
            </Link>
            . */}
        </Typography>
    </ResumeSection>
)

export default Summary
