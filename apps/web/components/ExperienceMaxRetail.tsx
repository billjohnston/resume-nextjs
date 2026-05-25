import { FunctionComponent } from 'react'
import dayjs from 'dayjs'

import ExperienceItem from 'components/ExperienceItem'

const accomplishments = [
    'Promoted to Director of Engineering, leading and mentoring a team of 7 engineers through regular 1:1s, performance reviews, and technical direction',
    'Drove adoption of AI-assisted development tooling (Claude Code) across the engineering team, improving developer productivity',
    'Architected and built a proof-of-concept for an AI-augmented product enhancement pipeline, automating the cleansing and enrichment of retailer product data with human-in-the-loop validation, leveraging prompt engineering to optimize LLM output quality',
    'Built internal MCP servers to give engineering and business teams direct, structured access to MaxRetail data',
    'Built and scaled Lightspeed and Square POS integrations into the MaxRetail platform, supporting 217 retailers with active inventory and processing ~28.5K listing units across ~$3.02M in listed inventory value',
    'Engineered a comprehensive Order Management System (OMS) integrating Mirakl and Monday.com, automating 70% of company order processing',
    'Built a lead scoring system that parsed and ranked 5 million Shopify stores to surface and prioritize sales targets, resulting in hundreds of net-new retailers onboarded',
]

const startDate = dayjs('2022-09')
const endDate = dayjs()

const ExperienceMaxRetail: FunctionComponent = () => (
    <ExperienceItem
        company="Max Retail"
        position="Director of Engineering"
        startDate={startDate}
        endDate={endDate}
        summary="The easiest way to sell your leftover inventory"
        accomplishments={accomplishments}
        currentEmployer
    />
)

export default ExperienceMaxRetail
