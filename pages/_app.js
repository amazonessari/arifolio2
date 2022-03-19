import '../styles/global.scss'
import '../styles/variable.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-out-sine",
      duration: 200,
    });
  }, []);
  
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  
}

