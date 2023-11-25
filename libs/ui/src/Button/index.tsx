import { Stack, Circle } from '../../styled-system/jsx'

export const Button = () => (
  <Stack gap="4" align="flex-start">
    <button>Button</button>
    <Circle size="4" bg="red.300">
      4
    </Circle>
  </Stack>
)
