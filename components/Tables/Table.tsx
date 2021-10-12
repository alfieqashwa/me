type Props = {
  children: React.ReactNode
}

const Table: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <div className='mx-auto overflow-x-auto'>
      <table className='table-auto relative w-full max-w-5xl mb-20 overflow-hidden border-[1px] rounded-md border-coolGray-600  font-secondary mt-11'>
        {children}
      </table>
    </div>
  )
}

export default Table
