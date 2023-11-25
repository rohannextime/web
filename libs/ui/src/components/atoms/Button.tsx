import { Stack, Circle } from '@/styled-system/jsx'
import { HTMLStyledProps } from '@/styled-system/types'

type ButtonProps = HTMLStyledProps<'button'>

export function Button({ children }: ButtonProps) {
  return (
    <Stack gap="4" align="flex-start">
      <button>Button</button>
      <Circle size="4" bg="red.300">
        {children}
      </Circle>
    </Stack>
  )
}

Button.displayName = 'Button'
