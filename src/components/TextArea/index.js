import React from 'react'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'
import { getBgColor, getBorderColor, getColor, getLabelColor } from './utils'

const TextArea = ({
  kind,
  borderVariant = 'outlined',
  borderColor,
  color,
  errorColor,
  labelColor,
  textAreaStyle,
  labelStyle,
  errorStyle,
  containerStyle,
  label,
  fullWidth,
  disabled,
  error,
  ...others
}) => {
  const { colors, dark } = useChmexTheme()

  return (
    <div
      style={{ width: fullWidth && '100%', ...containerStyle }}
      className={styles['nt-text-area-container']}
    >
      {label && (
        <span
          className={styles['nt-text-area-label']}
          style={{
            color: labelColor || getLabelColor(colors, kind, dark),
            ...labelStyle
          }}
        >
          {label}
        </span>
      )}
      <textarea
        disabled={disabled}
        className={`${styles['nt-text-area']} ${styles[borderVariant]}`}
        {...others}
        style={{
          backgroundColor: getBgColor(colors, disabled),
          borderColor:
            borderColor || getBorderColor(colors, kind, dark, disabled, error),
          color: color || getColor(colors, dark),
          width: fullWidth && '100%',
          borderStyle: disabled ? 'dotted' : 'solid',
          cursor: disabled ? 'not-allowed' : 'inherit',
          ...textAreaStyle
        }}
      />
      {error && (
        <span
          className={styles['nt-text-area-error']}
          style={{
            color: errorColor || colors.warning,
            ...errorStyle
          }}
        >
          {error}
        </span>
      )}
    </div>
  )
}

export default TextArea
