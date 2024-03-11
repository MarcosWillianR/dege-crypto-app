import styled from 'styled-components/native'
import { View, Pressable, Text } from 'react-native'

import { verticalScale, horizontalScale, moderateScale } from '@utils/metrics'

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const HeaderArrowButton = styled(Pressable)`
  padding: ${verticalScale(42)}px ${horizontalScale(24)}px;
`

export const HeaderTitle = styled(Text)`
  flex: 1;
  text-align: center;
  margin-right: ${horizontalScale(80)}px;
  font-size: ${({ theme }) => moderateScale(theme.FONT_SIZE.MD)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`
