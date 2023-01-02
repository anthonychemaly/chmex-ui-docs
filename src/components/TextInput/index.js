import React from 'react'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'
import { getBgColor, getBorderColor, getColor, getLabelColor } from './utils'

const TextInput = ({
  kind,
  borderVariant = 'outlined',
  borderColor,
  color,
  errorColor,
  labelColor,
  inputStyle,
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
      className={styles['nt-input-container']}
    >
      {label && (
        <span
          className={styles['nt-input-label']}
          style={{
            color: labelColor || getLabelColor(colors, dark),
            ...labelStyle
          }}
        >
          {label}
        </span>
      )}
      <input
        disabled={disabled}
        className={`${styles['nt-input']} ${styles[borderVariant]}`}
        {...others}
        style={{
          backgroundColor: getBgColor(colors, disabled),
          borderColor:
            borderColor || getBorderColor(colors, kind, dark, disabled, error),
          color: color || getColor(colors, dark),
          width: fullWidth && '100%',
          borderStyle: disabled ? 'dotted' : 'solid',
          cursor: disabled ? 'not-allowed' : 'inherit',
          ...inputStyle
        }}
      />
      {error && (
        <span
          className={styles['nt-input-error']}
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

export default TextInput
