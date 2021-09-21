import { FC, ReactElement } from 'react'

const ExampleComponent: FC<{ title: string }> = ({ title }): ReactElement => {
  return (
    <div className='px-12 py-4 transition-shadow duration-1000 ease-in-out bg-white rounded-lg shadow-inner cursor-pointer hover:shadow-2xl'>
      <h1 className='text-3xl font-bold text-gray-600 sm:text-5xl md:text-7xl lg:text-9xl'>
        {title}
      </h1>
    </div>
  )
}

export { ExampleComponent }
