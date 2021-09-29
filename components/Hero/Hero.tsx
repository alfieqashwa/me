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
        <QuoteCard />
      </section>
    </div>
  )
}

export default Hero

const QuoteCard = () => {
  const glowVariants = {
    hover: {
      scale: 1.1,
    },
    initial: {
      scale: 1,
    },
  }

  return (
    <motion.div
      initial='initial'
      whileHover='hover'
      className='relative cursor-wait'
    >
      <motion.div
        variants={glowVariants}
        transition={{ ease: 'easeOut', delay: 0.15 }}
        className='absolute -inset-0.5 w-full h-full bg-gradient-to-r from-pink-600 to-violet-600 rounded-2xl blur-lg'
      />
      <div className='relative h-full px-10 py-12 mb-0 overflow-hidden bg-black rounded-2xl'>
        <h3 className='flex items-center justify-center h-12 text-transparent font-secondary bg-clip-text bg-gradient-to-tr via-white from-amber-900 to-amber-900'>
          ✨ Home is not a house ✨
        </h3>
      </div>
    </motion.div>
  )
}
//  <motion.div initial='initial' whileHover='hover' className='relative'>
//       <motion.div
//         variants={glowVariants}
//         transition={{ ease: 'easeOut', delay: 0.15 }}
//         className='absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-violet-600 rounded-xl blur-xl'
//       />
//       <motion.div
//         variants={cardVariants}
//         transition={{ ease: 'easeOut', delay: 0.15, duration: 0.5 }}
//         className='relative flex items-center justify-center h-24 bg-black rounded-xl w-96'
//       >
//         <h3 className='text-transparent font-secondary bg-clip-text bg-gradient-to-tr via-white from-amber-900 to-amber-900'>
//           ✨ Home is not a house ✨
//         </h3>
//       </motion.div>
//     </motion.div>
