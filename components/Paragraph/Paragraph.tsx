type Props = {
  children: React.ReactNode
}

const Paragraph: React.FC<Props> = (props: Props): JSX.Element => {
  return <p className='text-coolGray-50'>{props.children}</p>
}

export default Paragraph
