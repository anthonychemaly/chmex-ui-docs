import React from 'react'
import { Typography } from 'chmex-ui'

import './styles.css'

const Example = ({ children }) => {
  return (
    <div className='example-container'>
      <Typography>Output:</Typography>
      <div className='example-wrapper'>{children}</div>
    </div>
  )
}

export default Example
