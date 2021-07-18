import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import GlobalStyes from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyes />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
