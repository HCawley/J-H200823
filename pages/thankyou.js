import React from 'react'
import Confetti from '../components/confetti'
import FlowerArch from '../components/flowerArch'
import { motion } from "framer-motion";
import Image from 'next/image';


const thankyou = () => {
  return (
    <>
    <Confetti />
    <FlowerArch />
    <div className='h-screen z-0 -mt-28 lg:-mt-36 mb-50'>
        <p className='text-2xl md:text-4xl font-bold text-center mt-10'>Thanks for letting us know!</p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 0.8, 1] }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }}
        >
          <Image
            className="rounded-full border-4 border-neutral"
            priority
            src="/jimhelen.jpeg"
            width={300}
            height={300}
            alt="jim and helen"
            style={{ margin: "auto", marginTop: 30, marginBottom: 30 }}
          />
        </motion.div>
    </div>
    </>
    
  )
}

export default thankyou