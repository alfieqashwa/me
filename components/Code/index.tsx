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
function calculateLinesToHighlight(meta: string | null) {
  if (RE.test(meta as string)) {
    const strlineNumbers = RE?.exec(meta as string)?.[1]
    const lineNumbers = rangeParser(strlineNumbers as string)
    return (index: number) => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

const Code = ({ children }: CodeBlockProps, metaString: string) => {
  const shouldHighlightLine = calculateLinesToHighlight(metaString)
  // pull the className
  const language: Language | string =
    children?.props?.className?.replace(/language-/, '') || ''

  return (
    <Highlight
      Prism={defaultProps.Prism}
      theme={theme}
      code={children?.props?.children.trim()}
      language={language as Language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div data-language={language}>
          <LangsIcon>
            <div className='overflow-hidden'>
              <Pre className={className} style={style}>
                {tokens.map((line, index) => {
                  return (
                    <Line
                      key={index}
                      {...getLineProps({ line, key: index })}
                      className={`${
                        shouldHighlightLine(index) ? 'highlight-line' : ''
                      }`}
                    >
                      <LineContent>
                        <LineNo className='line-number-style'>
                          {index + 1}
                        </LineNo>
                      </LineContent>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </Line>
                  )
                })}
              </Pre>
            </div>
          </LangsIcon>
        </div>
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
