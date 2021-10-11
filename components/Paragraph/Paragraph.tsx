type Props = {
  children: React.ReactNode
}

const Paragraph: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <p className='text-lg text-transparent md:text-xl bg-clip-text bg-gradient-to-br from-coolGray-50 to-amber-50 font-primary'>
      {props.children}
    </p>
  )
}

export default Paragraph
