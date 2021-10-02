import React from 'react'
import type { AppProps } from 'next/app'

export const Heading = {
  // See https://github.com/typescript-cheatsheets/react#section-2-getting-started
  // See https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type
  H1: function (props: AppProps) {
    return <h1 {...props} style={{ color: '#000000' }} />
  },
  H2: function (props: AppProps) {
    return <h2 {...props} style={{ color: '#000000' }} />
  },
  H3: function (props: AppProps) {
    return <h3 {...props} style={{ color: '#000000' }} />
  },
}
