import Head from "next/head";
import { Fragment } from "react";
import "../styles/globals.css";
import Layout from "../ui/layout/layout";
import { UserContextProvider } from "../store/user-context";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Calculadora de IMC</title>
        <meta name="description" content="Calculadora prática e rápida de IMC" />
      </Head>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </Fragment>
  );
}

export default MyApp;
