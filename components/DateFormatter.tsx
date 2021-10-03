import { parseISO, format } from 'date-fns'

type Props = {
  dateString: string
}

const DateFormatter: React.FC<Props> = ({ dateString }: Props) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
}

export default DateFormatter
