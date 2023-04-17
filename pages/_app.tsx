import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WordokuContextProvider } from '@/context/WordokuContext'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WordokuContextProvider>
      <Component {...pageProps} />
    </WordokuContextProvider>
    )
}
