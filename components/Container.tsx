type Props = {
  children?: React.ReactNode
}

const Container: React.FC = ({ children }: Props) => {
  return <div className='container px-4 mx-auto'>{children}</div>
}

export default Container
