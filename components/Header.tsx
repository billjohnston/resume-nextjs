import { FunctionComponent } from 'react'

import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

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
