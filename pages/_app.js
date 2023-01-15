import Layout from "../components/Layout";
import { motion } from "framer-motion";
import "../styles/globals.css";
import "../styles/burger.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <title>Jim & Helen 2023</title>
      </Head>
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
          transition: {
            duration: 1000
          }
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </>
  );
}

export default MyApp;
