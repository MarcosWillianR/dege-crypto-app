import styled from 'styled-components/native'
import { Pressable, TextInput, View } from 'react-native'

import { verticalScale, horizontalScale, moderateScale } from '@utils/metrics'

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;

  flex: 1;
  max-height: ${verticalScale(64)}px;

  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_240};
`

export const Input = styled(TextInput)`
  flex: 1;
  
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => moderateScale(theme.FONT_SIZE.SM)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};

  padding: ${verticalScale(20)}px 0 ${verticalScale(20)}px ${horizontalScale(16)}px;
`

export const InputIconButton = styled(Pressable)`
  padding: ${verticalScale(20)}px ${horizontalScale(16)}px;
`
