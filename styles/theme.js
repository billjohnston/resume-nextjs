import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    width: '100%',
                    height: '100%',
                    padding: 0,
                    margin: 0,
                },
                body: {
                    width: '100%',
                    height: '100%',
                    padding: 0,
                    margin: 0,
                    color: '#555',
                },
                '#__next': {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                },
            },
        },
    },
})

export default theme
