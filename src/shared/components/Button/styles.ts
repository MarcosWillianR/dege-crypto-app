import styled from 'styled-components/native'
import { Pressable, Text } from 'react-native'

interface ContainerProps {
  type: 'primary' | 'secondary'
}

interface ButtonTextProps {
  type: 'primary' | 'secondary'
}

export const Container = styled(Pressable)<ContainerProps>`
  padding: 12px 24px;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ theme, type }) => {
    const availableTypeColors = {
      primary: theme.COLORS.PRIMARY_500,
      secondary: theme.COLORS.GRAY_240
    }

    return availableTypeColors[type]
  }};
`

export const ButtonText = styled(Text)<ButtonTextProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme, type }) => {
    const availableTypeColors = {
      primary: theme.COLORS.BLACK,
      secondary: theme.COLORS.PRIMARY_500
    }

    return availableTypeColors[type]
  }};
`
