import { createContext } from 'react'
import colors from './constants/colors'

const ChmexUIContext = createContext({
  colors: colors,
  dark: false
})

export default ChmexUIContext
