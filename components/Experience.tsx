import { FunctionComponent } from 'react'

import ResumeSection from 'components/ResumeSection'
import ExperienceQuadio from 'components/ExperienceQuadio'
import ExperienceFullscreen from 'components/ExperienceFullscreen'
import ExperienceReelio from 'components/ExperienceReelio'
import ExperienceSneakAttackMedia from 'components/ExperienceSneakAttackMedia'

const Experience: FunctionComponent = () => (
    <ResumeSection title="Experience">
        <ExperienceQuadio />
        <ExperienceFullscreen />
        <ExperienceReelio />
        <ExperienceSneakAttackMedia />
    </ResumeSection>
)

export default Experience
