import Layout from '../components/Layout';
import '../Styles/Global.css'
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
  }
export default MyApp