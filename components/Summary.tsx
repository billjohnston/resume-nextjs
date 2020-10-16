import { FunctionComponent } from 'react'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import ResumeSection from 'components/ResumeSection'

const Summary: FunctionComponent = () => (
    <ResumeSection title="Summary">
        <Typography variant="body1">
            Full-Stack developer/CTO living in NYC. Serverless microservice
            advocate. First engineering employee at two start-ups where I built
            the application, infrastructure, and engineering teams. Find my
            resume&apos;s source code here:{' '}
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
            .
        </Typography>
    </ResumeSection>
)

export default Summary
