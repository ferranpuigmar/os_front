import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import { getBreakpoints } from 'utils/breakpoints';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import BasicLayout from '@components/shared/Layouts/BasicLayout/BasicLayout';
import breakpoints from 'config/breakpoints.config';
import '@styles/global.scss'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

setConfiguration({
  breakpoints: getBreakpoints(breakpoints)
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ScreenClassProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <BasicLayout {...pageProps}>
            <Component {...pageProps} />
          </BasicLayout>
        </ThemeProvider>
      </QueryClientProvider >
    </ScreenClassProvider>
  )
}

export default appWithTranslation(MyApp) 
