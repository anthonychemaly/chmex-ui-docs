import React from 'react'
import { Typography } from 'chmex-ui'

import './styles.css'

const Example = ({ children, style, wrapperStyle }) => {
  return (
    <div className='example-container' style={style}>
      <Typography>Output:</Typography>
      <div className='example-wrapper' style={wrapperStyle}>
        {children}
      </div>
    </div>
  )
}

export default Example
