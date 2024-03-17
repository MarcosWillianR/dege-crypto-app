import { type PressableProps } from 'react-native'

import { Container, ButtonText } from './styles'

interface ButtonProps extends PressableProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary'
  disabled?: boolean
}

export default function Button({
  children,
  type = 'primary',
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <Container {...rest} disabled={disabled} type={type}>
      <ButtonText disabled={disabled} type={type}>
        {children}
      </ButtonText>
    </Container>
  )
}
