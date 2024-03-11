import { type TextInputProps } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import { useTheme } from 'styled-components/native'

import { moderateScale } from '@utils/metrics'

import { Container, Input, InputIconButton } from './styles'

export default function TextInput({ children, ...rest }: TextInputProps) {
  const { COLORS } = useTheme()

  return (
    <Container>
      <Input {...rest} placeholderTextColor={COLORS.GRAY_130} />

      <InputIconButton>
        <Feather name="eye" size={moderateScale(24)} color={COLORS.WHITE} />
      </InputIconButton>
    </Container>
  )
}
