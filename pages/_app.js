import '../styles/globals.css';
import Everypage from '../components/Everypage';

function MyApp({ Component, pageProps }) {
  return (
    <Everypage>
        <Component {...pageProps} />
    </Everypage>
  )
  
  
  

}

export default MyApp
