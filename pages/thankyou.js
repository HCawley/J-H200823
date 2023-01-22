import React from 'react'
import Confetti from '../components/confetti'
import FlowerArch from '../components/flowerArch'

const thankyou = () => {
  return (
    <>
    <Confetti />
    <FlowerArch />
    <div className='h-screen z-10 -mt-28 lg:-mt-36 mb-50'>
        <p className='text-2xl md:text-4xl font-bold text-center mt-10'>Thanks for letting us know!</p>
    </div>
    </>
    
  )
}

export default thankyou