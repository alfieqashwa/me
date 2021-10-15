import styled from '@emotion/styled'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import rangeParser from 'parse-numeric-range'
import { LangsIcon } from './LangsIcon'

interface CodeBlockProps {
  children: {
    props: {
      children: string
      className: string
    }
  }
  className: string
}

const RE = /{([\d,-]+)}/
function calculateLinesToHighlight(meta: string) {
  if (RE.test(meta)) {
    const strlineNumbers = RE?.exec(meta)?.[1]
    const lineNumbers = rangeParser(strlineNumbers as string)
    console.log(lineNumbers)
    return (index: number) => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const Code: React.FC<CodeBlockProps> = ({
  children,
}: CodeBlockProps): JSX.Element => {
  // pull the className
  const language: Language | string =
    children.props?.className?.replace(/language-/, '') || ''

  const metaString = children.props.className || ''
  const shouldHighlightLine = calculateLinesToHighlight(metaString)

  return (
    <Highlight
      // Prism={defaultProps.Prism}
      {...defaultProps}
      theme={theme}
      code={children.props?.children.trim()}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <LangsIcon>
          <Pre className={className} style={style}>
            {tokens.map((line, i) => {
              const lineProps = getLineProps({
                line,
                key: i,
              })
              if (shouldHighlightLine(i)) {
                lineProps.className = `${lineProps.className} highlight-line`
              }
              return (
                <Line key={i} {...lineProps}>
                  <LineNo className='line-number-style'>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              )
            })}
          </Pre>
        </LangsIcon>
      )}
    </Highlight>
  )
}

export default Code

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  & .token-line {
    line-height: 1.75em;
    height: 1.75em;
  }
`

const Line = styled.div`
  display: table-row;
`

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`

const LineContent = styled.span`
  display: table-cell;
`
