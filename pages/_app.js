import '../styles/global.scss'
import '../styles/variable.scss'

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
  
}