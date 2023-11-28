import { definePreset } from '@pandacss/dev'

import './index.css'
export { Button } from './Button'

export default definePreset({
  theme: {
    tokens: {
      colors: {
        primary: { value: '#30d158' }
      }
    }
  }
})
