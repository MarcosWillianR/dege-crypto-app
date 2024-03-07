import styled from 'styled-components/native'
import { View, Pressable, Text } from 'react-native'

export const Container = styled(View)`
  background-color: red;
`

export const Header = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const HeaderArrowButton = styled(Pressable)`
  background-color: blue;
  padding: 42px 24px;
`

export const HeaderTitle = styled(Text)`
  flex: 1;
  text-align: center;
  margin-right: 80px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
