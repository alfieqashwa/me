type Props = {
  children?: React.ReactNode
}

const PostTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <h1 className='font-extrabold tracking-tight text-center font-secondary md:text-left'>
      {children}
    </h1>
  )
}

export default PostTitle
