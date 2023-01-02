import { getBorderColor as chmexBorderColor, getLabelColor } from '../utils'

function getBgColor(colors, disabled) {
  if (disabled) {
    return colors.disabledBg
  }

  return colors.transparent
}

function getBorderColor(colors, kind, dark, disabled, error) {
  if (error) {
    return colors.warning
  }
  if (disabled) {
    return colors.grey
  }

  return chmexBorderColor(colors, kind, dark)
}

function getColor(colors, dark) {
  return dark ? colors.white : colors.black
}

export { getBgColor, getBorderColor, getColor, getLabelColor }
