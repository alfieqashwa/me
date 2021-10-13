import React from 'react'
import styled from '@emotion/styled'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

import Title from './Title'
import { LangsIcon, preStyles } from './LangsIcon'

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
function calculateLinesToHighlight(meta: string) {
  const RE = /{([\d,-]+)}/

  if (RE.test(meta)) {
    const lineNumbers = RE?.exec(meta)?.[1]
      .split(',')
      .map((v) => v.split('-').map((y) => parseInt(y, 10)))

    return (index: number) => {
      const lineNumber = index + 1
      const inRange = lineNumbers?.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}

const CodePrism = ({ codeString, language, metaString, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metaString)

  if (props['live']) {
    return (
      <div>
        <h3>Yeayy...!! Live coding!!!</h3>
      </div>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        theme={theme}
        code={codeString}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div style={{ overflow: 'auto' }}>
            <LangsIcon>
              <Pre className={className} style={style}>
                {tokens.map((line, index) => {
                  const { className } = getLineProps({
                    line,
                    key: index,
                    className: shouldHighlightLine(index)
                      ? 'highlight-line'
                      : '',
                  })

                  return (
                    <Line key={index} className={className}>
                      <LineNo className='number-line'>{index + 1}</LineNo>
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
          </div>
        )}
      </Highlight>
    )
  }
}

export default CodePrism
