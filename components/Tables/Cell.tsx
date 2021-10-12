type Props = {
  children: React.ReactNode
}

const Cell: React.FC<Props> = (props): JSX.Element => {
  return (
    <td className='py-4 text-base border-t px-7 border-coolGray-500 bg-coolGray-700'>
      {props.children}
    </td>
  )
}

export default Cell
