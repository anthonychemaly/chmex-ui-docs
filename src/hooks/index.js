import { useContext } from 'react'
import ChmexUIContext from '../ChmexUIContext'
import ChmexUIColors from '../constants/colors'

export const useChmexTheme = () => {
  const { colors, dark } = useContext(ChmexUIContext)
  return { colors: colors || ChmexUIColors, dark }
}
