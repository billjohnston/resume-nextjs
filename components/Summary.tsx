import { ReactElement } from 'react'

import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import ResumeSection from 'components/ResumeSection'

const Summary = (): ReactElement => (
    <ResumeSection title="Summary">
        <Typography variant="body1">
            Full-Stack developer/CTO living in NYC. Serverless microservice
            advocate. First engineering employee at two start-ups, built their
            application, infrastructure and engineering teams. Check out for the
            source for my resume{' '}
            <Link href="https://github.com/billjohnston/resume-nextjs">
                client
            </Link>{' '}
            and a simple infrastructure as code{' '}
            <Link
                target="_blank"
                href="https://github.com/billjohnston/resume-cdk"
            >
                AWS CDK web host
            </Link>
        </Typography>
    </ResumeSection>
)

export default Summary
