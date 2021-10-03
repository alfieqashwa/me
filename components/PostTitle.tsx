type Props = {
  children?: React.ReactNode
}

const PostTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <h1 className='tracking-tight text-center md:text-left dark:text-gray-100'>
      {children}
    </h1>
  )
}

export default PostTitle
