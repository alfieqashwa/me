type Props = {
  children: React.ReactNode
}

const HeadCell: React.FC<Props> = (props): JSX.Element => {
  return (
    <th className='py-4 text-gray-300 px-7 bg-coolGray-800'>
      {props.children}
    </th>
  )
}

export default HeadCell
