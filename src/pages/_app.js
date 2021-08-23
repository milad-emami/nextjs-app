import SEO from "../components/SEO";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title={pageProps?.seo?.title}
        description={pageProps?.seo?.description}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
