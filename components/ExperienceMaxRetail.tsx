import { FunctionComponent } from 'react'
import dayjs from 'dayjs'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Directly managed and mentored a team of 7 engineers, conducting regular 1:1 meetings to foster professional growth and ensure project alignment',
    'Implemented AI-assisted product cleansing process',
    'Built Lightspeed and Square POS Integrations, supporting 58 retailers and processing 9,179 listing units valued at over $600,000',
    'Engineered and built a comprehensive Order Management System (OMS), integrating Mirakl order ingestion and Monday.com to significantly improve order processing efficiency and accuracy',
    'Developed a lead scoring system to effectively prioritize sales outreach, enhancing efficiency in acquiring new retailers',
    'Won a hackathon for the successful Proof-of-Concept (POC) of the MaxRetail ReactNative mobile app',
]

const startDate = dayjs('2022-09')
const endDate = dayjs()

const ExperienceMaxRetail: FunctionComponent = () => (
    <ExperienceItem
        company="Max Retail"
        position="Principal Software Engineer"
        startDate={startDate}
        endDate={endDate}
        summary="The easiest way to sell your leftover inventory"
        accomplishments={accomplishments}
        currentEmployer
    />
)

export default ExperienceMaxRetail
