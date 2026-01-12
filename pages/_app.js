import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Luwam Goitom-Worre</title>
        <meta name="description" content="Luwam Goitom-Worre's Portfolio" />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
