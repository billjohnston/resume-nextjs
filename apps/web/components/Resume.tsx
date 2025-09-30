import { FunctionComponent } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import Header from 'components/Header'
import Summary from 'components/Summary'
import Experience from 'components/Experience'
import Education from 'components/Education'
import Skills from 'components/Skills'

const Resume: FunctionComponent = () => {
    return (
        <Container maxWidth="md">
            <Box pt={1} pb={4} display="flex" flex={1} flexDirection="column">
                <Header />
                <Summary />
                <Skills />
                <Experience />
                <Education />
            </Box>
        </Container>
    )
}

export default Resume
