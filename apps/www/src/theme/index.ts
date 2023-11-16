import { extendTheme } from '@nextime-ui/react'
import { colors } from './colors'
import { config } from './config'
import { styles } from './styles'
import { fonts } from './fonts'
import { components } from './additions'

export const theme = extendTheme({
  colors,
  config,
  styles,
  fonts,
  components,
})
