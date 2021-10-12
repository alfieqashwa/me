type Props = {
  children: React.ReactNode
}

const Head: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <thead className='relative font-semibold leading-7 text-left border-collapse font-secondary'>
      {children}
    </thead>
  )
}

export default Head
