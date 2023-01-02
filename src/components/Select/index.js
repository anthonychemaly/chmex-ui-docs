import React from 'react'
import { useChmexTheme } from '../../hooks'
import styles from './styles.modules.scss'
import { getBgColor, getBorderColor, getColor, getLabelColor } from './utils'

const Select = ({
  kind,
  borderVariant = 'outlined',
  borderColor,
  color,
  errorColor,
  labelColor,
  selectStyle,
  labelStyle,
  errorStyle,
  containerStyle,
  label,
  fullWidth,
  disabled,
  error,
  options,
  ...others
}) => {
  const { colors, dark } = useChmexTheme()

  return (
    <div
      style={{ width: fullWidth && '100%', ...containerStyle }}
      className={styles['nt-select-container']}
    >
      {label && (
        <span
          className={styles['nt-select-label']}
          style={{
            color: labelColor || getLabelColor(colors, dark),
            ...labelStyle
          }}
        >
          {label}
        </span>
      )}
      <select
        disabled={disabled}
        className={`${styles['nt-select']} ${styles[borderVariant]}`}
        placeholder='hey'
        {...others}
        style={{
          backgroundColor: getBgColor(colors, disabled),
          borderColor:
            borderColor || getBorderColor(colors, kind, dark, disabled, error),
          color: color || getColor(colors, dark),
          width: fullWidth && '100%',
          borderStyle: disabled ? 'dotted' : 'solid',
          cursor: disabled ? 'not-allowed' : 'inherit',
          ...selectStyle
        }}
      >
        {options?.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <span
          className={styles['nt-select-error']}
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

export default Select
