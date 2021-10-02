import { motion } from 'framer-motion'

const ExampleComponent: React.FC<{ title: string }> = (props): JSX.Element => {
  const headerVariant = {
    hidden: { translateY: 50, opacity: 0 },
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  }
  return (
    <div className='px-12 py-4 cursor-pointer'>
      <motion.h1
        variants={headerVariant}
        initial='hidden'
        animate='visible'
        className='p-2 font-extrabold text-transparent capitalize md:text-8xl bg-gradient-to-b via-white from-amber-900 bg-clip-text to-amber-900'
      >
        {props.title}
      </motion.h1>
    </div>
  )
}

export { ExampleComponent }
