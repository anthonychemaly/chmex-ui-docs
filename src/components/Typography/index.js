import React from 'react'
import colors from '../../constants/colors'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'

const Typography = ({ kind = 'p', color, children, style }) => {
  const { dark } = useChmexTheme()

  return (
    <span
      className={styles[kind]}
      style={{
        color: color || (dark ? colors.white : colors.black),
        display: 'block',
        marginBottom: 24,
        ...style
      }}
    >
      {children}
    </span>
  )
}

export default Typography
