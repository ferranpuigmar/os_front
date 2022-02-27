import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useState } from 'react';
import { ScreenClassProvider, setConfiguration } from 'react-grid-system';
import { getBreakpoints } from '../utils/breakpoints';
import breakpoints from '../config/breakpoints.config';
import '../styles/global.scss'

setConfiguration({
  breakpoints: getBreakpoints(breakpoints)
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return <ScreenClassProvider><QueryClientProvider client={queryClient}><Component {...pageProps} /></QueryClientProvider ></ScreenClassProvider>
}

export default appWithTranslation(MyApp) 
