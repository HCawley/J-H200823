import React from 'react'

export const Doves = () => {
  return (
    <div>
        <motion.div
        initial={{ x: -500, y: -300 }}
        animate={{ x: 400, y: 50 }}
        transition={{ duration: 3 }}
      >
        <Image src="/flyingDoveL.png" width={50} height={50} alt="flying dove left"/>
      </motion.div>

      <motion.div
        initial={{ x: 700, y: 500 }}
        animate={{ x: -400, y: 0 }}
        transition={{ delay: 0.5, duration: 3 }}
        className="flex justify-end"
      >
        <Image src="/flyingDoveR.png" width={45} height={45} alt="flying dove right"/>
      </motion.div>
    </div>
  )
}
