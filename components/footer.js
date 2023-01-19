import { motion } from 'framer-motion'


const Footer = () => {
    return ( 
        <div className="bottom-0 text-center text-1xl py-5 border-neutral border-0 border-t border-solid">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <p>&copy; Created by Helen Cawley 2022</p>
            </motion.div>
            
        </div>
     );
}
 
export default Footer;
