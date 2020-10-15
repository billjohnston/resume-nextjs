import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
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
