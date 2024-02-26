import styled from 'styled-components/native'
import { Pressable, Text } from 'react-native'

export const Container = styled(Pressable)`
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_240};
  align-items: center;
  border-radius: 8px;
`

export const ButtonText = styled(Text)`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`
