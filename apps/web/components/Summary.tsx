import { FunctionComponent } from 'react'

import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

import ResumeSection from 'components/ResumeSection'

const Summary: FunctionComponent = () => (
    <ResumeSection title="Summary">
        <Typography variant="body1">
            Experienced Full-Stack Developer and CTO based in NYC,
            a strong advocate for serverless microservices. As the
            first engineering employee at two successful startups,
            I built foundational applications, infrastructure, and
            scaled engineering teams.
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
