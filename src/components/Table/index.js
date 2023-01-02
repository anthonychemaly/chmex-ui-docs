import React from 'react'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'

const Table = ({ children, style, borderColor, textColor }) => {
  const { colors, dark } = useChmexTheme()

  return (
    <table
      className={styles.table}
      style={{
        ...style,
        borderColor:
          borderColor || (dark ? colors.borderDark : colors.borderLight),
        color: textColor || dark ? colors.white : colors.black
      }}
    >
      {children}
    </table>
  )
}

export default Table
