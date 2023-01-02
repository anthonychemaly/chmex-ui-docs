import React, { useState } from 'react'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'

import {
  getBgColor,
  getBorderColor,
  getColor,
  getHoveredBgColor,
  getHoveredColor
} from '../utils'

const Button = ({
  kind = 'basic',
  borderVariant,
  text,
  style,
  transition = true,
  onClick,
  borderColor
}) => {
  const { colors, dark } = useChmexTheme()
  const [hovered, setHovered] = useState(false)

  return (
    <span
      className={`${styles['nt-btn']} ${styles[borderVariant]}`}
      style={{
        ...style,
        background: !hovered
          ? getBgColor(colors, kind, dark)
          : getHoveredBgColor(colors, kind, dark),
        border: `2px solid ${
          borderColor || getBorderColor(colors, kind, dark)
        }`,
        color: !hovered
          ? getColor(colors, kind, dark)
          : getHoveredColor(colors, kind, dark)
      }}
      onClick={onClick}
      onMouseEnter={() => {
        transition && setHovered(true)
      }}
      onMouseLeave={() => {
        transition && setHovered(false)
      }}
    >
      {text}
    </span>
  )
}

export default Button
