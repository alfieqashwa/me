import { FC, ReactElement } from 'react'

const ExampleComponent: FC<{ title: string }> = ({ title }): ReactElement => {
  return (
    <div className='px-12 py-4 cursor-pointer'>
      <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-900 via-gray-50 to-yellow-900 sm:text-5xl md:text-7xl lg:text-9xl'>
        {title}
      </h1>
    </div>
  )
}

export { ExampleComponent }
