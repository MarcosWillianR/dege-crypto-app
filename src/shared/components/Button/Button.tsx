import { type PressableProps } from 'react-native'

import { Container, ButtonText } from './styles'

interface ButtonProps extends PressableProps {
  children: React.ReactNode
}

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}
