import type { AppProps } from 'next/app'
import Meta from '../layout/Meta'
import '../styles/root.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}
