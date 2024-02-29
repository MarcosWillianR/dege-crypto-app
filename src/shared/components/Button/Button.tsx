import { type PressableProps } from 'react-native'

import { Container, ButtonText } from './styles'

interface ButtonProps extends PressableProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary'
}

export default function Button({
  children,
  type = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <ButtonText type={type}>{children}</ButtonText>
    </Container>
  )
}
