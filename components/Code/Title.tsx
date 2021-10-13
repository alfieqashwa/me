type Props = {
  text: string
  className: string
  children: React.ReactNode
}

const Title: React.FC<Props> = (props: Props): JSX.Element => {
  const { text, children, className } = props
  return (
    <div
      className={`bg-[#d2c7ec] p-2.5 flex justify-between items-center ${className}`}
    >
      <h2 className='m-0 text-black'>{text}</h2>
      <div
        className='p-1.5 text-white rounded'
        // sx={{
        //   bg: `highlight`,
        // }}
      >
        {children}
      </div>
    </div>
  )
}
export default Title
