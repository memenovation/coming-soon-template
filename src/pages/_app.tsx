import "../../styles/global.css";
import Script from "next/script";

import { Layout } from "@components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://umami-bay-kappa.vercel.app/umami.js"
        data-website-id="ca82be68-fe5d-4551-9529-ec707ec91464"
      />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
