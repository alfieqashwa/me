type Props = {
  children?: React.ReactNode
}

const Container: React.FC = ({ children }: Props) => {
  return <div className='container mx-auto'>{children}</div>
}

export default Container
