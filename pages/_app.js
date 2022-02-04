import '../assets/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/globals.css';
import { SSRProvider } from "react-bootstrap";
import Layout from "../layout/Layout";

function MyApp({ Component, pageProps }) {

  return(
    <SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </SSRProvider>
  )
}

export default MyApp
