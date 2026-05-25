import { FunctionComponent, useRef } from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download'

import Header from 'components/Header'
import Summary from 'components/Summary'
import Experience from 'components/Experience'
import Education from 'components/Education'
import Skills from 'components/Skills'

import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'

const Resume: FunctionComponent = () => {
    const resumeRef = useRef<HTMLDivElement>(null)

    const handleDownloadPDF = async () => {
        if (!resumeRef.current) return

        try {
            const canvas = await html2canvas(resumeRef.current, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                windowWidth: resumeRef.current.scrollWidth,
                windowHeight: resumeRef.current.scrollHeight
            })

            const pdf = new jsPDF('portrait', 'mm', 'a4')

            // Add margins (in mm)
            const margin = 10
            const pageWidth = 210
            const pageHeight = 297
            const contentWidth = pageWidth - (margin * 2)
            const contentHeight = pageHeight - (margin * 2)

            const imgWidth = contentWidth
            const imgHeight = (canvas.height * imgWidth) / canvas.width

            // Calculate how many pages we need
            const totalPages = Math.ceil(imgHeight / contentHeight)

            for (let i = 0; i < totalPages; i++) {
                if (i > 0) pdf.addPage()

                const sourceY = i * (canvas.height / totalPages)
                const sourceHeight = Math.min(canvas.height / totalPages, canvas.height - sourceY)

                // Create a temporary canvas for this page section
                const tempCanvas = document.createElement('canvas')
                const tempCtx = tempCanvas.getContext('2d')
                tempCanvas.width = canvas.width
                tempCanvas.height = (canvas.height / totalPages)

                if (tempCtx) {
                    tempCtx.drawImage(
                        canvas,
                        0, sourceY, canvas.width, sourceHeight,
                        0, 0, canvas.width, tempCanvas.height
                    )

                    const pageImgData = tempCanvas.toDataURL('image/png')
                    pdf.addImage(pageImgData, 'PNG', margin, margin, imgWidth, contentHeight)
                }
            }

            pdf.save('resume.pdf')
        } catch (error) {
            console.error('Error generating PDF:', error)
        }
    }

    return (
        <Container maxWidth="md" sx={{ position: 'relative' }}>
            <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadPDF}
                sx={{
                    position: 'fixed',
                    top: 20,
                    right: 20,
                    zIndex: 1000,
                    backgroundColor: '#1976d2',
                    '&:hover': {
                        backgroundColor: '#1565c0'
                    },
                    '@media print': {
                        display: 'none'
                    }
                }}
            >
                Download PDF
            </Button>

            <Box pt={1} pb={4} display="flex" flex={1} flexDirection="column" ref={resumeRef}>
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
