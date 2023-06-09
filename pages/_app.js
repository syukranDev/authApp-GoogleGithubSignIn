import '../styles/globals.css'
import { SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.sesion}>
      <Component {...pageProps} />
    </SessionProvider>    
  )
}

export default MyApp
