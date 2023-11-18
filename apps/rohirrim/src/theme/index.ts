import { extendTheme } from '@nextime-ui/react'

import { components } from './additions'
import { colors } from './colors'
import { config } from './config'
import { fonts } from './fonts'
import { styles } from './styles'

export const theme = extendTheme({
  colors,
  config,
  styles,
  fonts,
  components
})
