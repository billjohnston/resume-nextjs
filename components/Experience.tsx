import { FunctionComponent } from 'react'

import ResumeSection from 'components/ResumeSection'

import ExperienceTalkspace from 'components/ExperienceTalkspace'
import ExperienceQuadio from 'components/ExperienceQuadio'
import ExperienceFullscreen from 'components/ExperienceFullscreen'
import ExperienceReelio from 'components/ExperienceReelio'
import ExperienceSneakAttackMedia from 'components/ExperienceSneakAttackMedia'
import ExperienceMaxRetail from 'components/ExperienceMaxRetail'

const Experience: FunctionComponent = () => (
    <ResumeSection title="Experience">
        <ExperienceMaxRetail />
        <ExperienceTalkspace />
        <ExperienceQuadio />
        <ExperienceFullscreen />
        <ExperienceReelio />
        <ExperienceSneakAttackMedia />
    </ResumeSection>
)

export default Experience
