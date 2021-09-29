import { motion } from 'framer-motion'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center justify-between py-60'>
      <section className='items-center space-y-4 flex-cols'>
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className='font-sans text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-b via-white from-amber-900 to-amber-900'
        >
          Cello, World!
        </motion.h1>
        <h2 className='text-transparent bg-clip-text bg-gradient-to-b via-white from-amber-900 to-amber-900'>
          Welcome to my personal blog
        </h2>
      </section>
      <section className='flex items-center'>
        <h2 className='sr-only'>Image section</h2>
      </section>
    </div>
  )
}

export default Hero
