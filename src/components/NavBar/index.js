import React from 'react'

import { useChmexTheme } from '../../hooks'
import { getBorderColor } from './utils'

import styles from './styles.modules.scss'

const NavBar = ({ leftChild, rightChild, sticky, fixed, style }) => {
  const { colors, dark } = useChmexTheme()

  return (
    <div
      className={`${styles['nt-navbar']} ${
        sticky === 'top' ? styles['sticky-top'] : ''
      } ${
        fixed === 'top'
          ? styles['fixed-top']
          : fixed === 'bottom'
          ? styles['fixed-bottom']
          : ''
      }`}
      style={{
        borderBottom: `1px solid ${getBorderColor(colors, dark)}`,
        background: dark ? colors.black : colors.white,
        ...style
      }}
    >
      <div className={styles.left}>{leftChild}</div>
      <div className={styles.right}>{rightChild}</div>
    </div>
  )
}

export default NavBar
