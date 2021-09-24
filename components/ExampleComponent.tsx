const ExampleComponent: React.FC<{ title: string }> = ({
  title,
}): JSX.Element => {
  return (
    <div className='px-12 py-4 cursor-pointer'>
      <h1 className='p-2 font-extrabold text-transparent capitalize text-8xl bg-gradient-to-br via-coolGray-50 from-amber-900 bg-clip-text to-amber-800'>
        {title}
      </h1>
    </div>
  )
}

export { ExampleComponent }
