import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
}

const Hero: React.FC<Props> = (props): JSX.Element => {
  const heroVariants = {
    hidden: { translateY: 50, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  }

  return (
    <div className='mt-40 md:mt-0 md:justify-between md:flex md:py-60'>
      <motion.section
        variants={heroVariants}
        initial='hidden'
        animate='visible'
        className='items-center space-y-4 flex-cols'
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className='text-5xl font-extrabold tracking-wide text-center text-transparent md:font-sans md:text-left bg-clip-text bg-gradient-to-b via-white from-amber-900 to-amber-900'
        >
          {props.title}
        </motion.h1>
        <h2 className='text-xl text-center text-transparent md:text-left md:text-4xl bg-clip-text bg-gradient-to-b via-white from-amber-900 to-amber-900'>
          {props.description}
        </h2>
      </motion.section>
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

  const quoteVariants = {
    initial: { y: -60 },
    animate: { y: 40 },
  }

  return (
    <motion.section
      className='relative h-auto mx-auto mt-20 max-w-max'
      variants={quoteVariants}
      initial='initial'
      animate='animate'
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 1,
        duration: 2,
      }}
    >
      <motion.div
        initial='initial'
        animate='hover'
        className='cursor-wait md:mt-0'
      >
        <motion.div
          variants={glowVariants}
          transition={{
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1,
            duration: 0.5,
          }}
          className='absolute -inset-0.5 w-full h-full bg-gradient-to-r from-pink-600 to-violet-600 rounded-2xl blur-lg'
        />
        <div className='relative px-5 py-6 overflow-hidden bg-black md:px-10 md:py-12 rounded-2xl'>
          <h3 className='flex items-center justify-center text-lg text-transparent md:h-12 md:text-3xl font-secondary bg-clip-text bg-gradient-to-tr via-white from-amber-900 to-amber-900'>
            {props.quote}
          </h3>
        </div>
      </motion.div>
    </motion.section>
  )
}
