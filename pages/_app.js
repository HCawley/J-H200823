import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import '../styles/globals.css'
import '../styles/burger.css'

function MyApp({ Component, pageProps, router }) {
  return (
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
                   }}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </motion.div>
    
  )
}

export default MyApp;
