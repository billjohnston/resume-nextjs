import { FunctionComponent } from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'

const Header: FunctionComponent = () => (
    <Box pt={2} pb={1}>
        <Typography variant="h3">Bill Johnston</Typography>
        <Box
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
        >
            <Typography variant="subtitle1">
                <Link target="_blank" href="mailto:billjohnston@pm.me">
                    billjohnston@pm.me
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link target="_blank" href="https://github.com/billjohnston">
                    github.com/billjohnston
                </Link>
            </Typography>
            <Typography variant="subtitle1">
                <Link href="tel:516-835-1132">(516) 835-1132</Link>
            </Typography>
        </Box>
    </Box>
)

export default Header
