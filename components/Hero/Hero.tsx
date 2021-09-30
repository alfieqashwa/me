import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
  children: React.ReactNode
}

const Hero: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className='mx-auto mt-40 md:mt-0 md-center md:justify-between md:flex md:py-60'>
      <section className='items-center space-y-4 flex-cols'>
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className='text-6xl font-extrabold tracking-wide text-center text-transparent md:font-sans md:text-left bg-clip-text bg-gradient-to-b via-white from-amber-900 to-amber-900'
        >
          {props.title}
        </motion.h1>
        <h2 className='text-2xl text-center text-transparent md:text-left md:text-4xl bg-clip-text bg-gradient-to-b via-white from-amber-900 to-amber-900'>
          {props.description}
        </h2>
      </section>
      <section className='flex items-center justify-center'>
        {props.children}
      </section>
    </div>
  )
}

export default Hero

export const HeroWithQuote: React.FC<{ quote: string }> = (
  props
): JSX.Element => {
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
      className='relative cursor-wait mt-28 md:mt-0'
    >
      <motion.div
        variants={glowVariants}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        className='absolute -inset-0.5 w-full h-full bg-gradient-to-r from-pink-600 to-violet-600 rounded-2xl blur-lg'
      />
      <div className='relative h-full px-10 py-12 mb-0 overflow-hidden bg-black rounded-2xl'>
        <h3 className='flex items-center justify-center h-12 text-2xl text-transparent md:text-3xl font-secondary bg-clip-text bg-gradient-to-tr via-white from-amber-900 to-amber-900'>
          {props.quote}
        </h3>
      </div>
    </motion.div>
  )
}
