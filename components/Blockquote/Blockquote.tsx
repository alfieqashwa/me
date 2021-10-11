type Props = {
  children: React.ReactNode
}

const Blockquote: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className='text-6xl'>
      <blockquote className='text-6xl'>{props.children}</blockquote>
    </div>
  )
}

export default Blockquote
