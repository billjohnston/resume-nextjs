import { FunctionComponent, useEffect, StrictMode } from 'react' // Import StrictMode
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from 'styles/theme'
import type { AppProps } from 'next/app'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

    return (
        <StrictMode> {/* Wrap your application with StrictMode */}
            <Head>
                <title>Bill Johnston</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
            </ThemeProvider>
        </StrictMode>
    )
}

export default App
