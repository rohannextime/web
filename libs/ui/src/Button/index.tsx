import { styled } from '../../styled-system/jsx'
import type { HTMLStyledProps } from '../../styled-system/jsx'

export type ButtonProps = HTMLStyledProps<'button'>

export const Button = (props: ButtonProps) => {
  return <styled.button {...props} />
}
