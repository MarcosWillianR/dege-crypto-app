import styled from 'styled-components/native'
import { Pressable, ScrollView, View, Text } from 'react-native'

import { horizontalScale, verticalScale, moderateScale } from '@utils/metrics'

export const Container = styled(View)`
  flex: 1;
  padding: 0px ${horizontalScale(24)}px;
`

export const FormScrollView = styled(ScrollView).attrs(({ theme }) => {
  return {
    contentContainerStyle: {
      flex: 1,
      gap: verticalScale(24)
    }
  }
})``

export const SeedPhraseWrapper = styled(View)`
  flex-direction: row;
  gap: ${horizontalScale(16)}px;
`

export const ScanButton = styled(Pressable)`
  padding: ${verticalScale(16)}px ${horizontalScale(16)}px;
  align-items: center;
  justify-content: center;
`

export const FaceIdWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const FaceIdText = styled(Text)`
  font-size: ${({ theme }) => moderateScale(theme.FONT_SIZE.MD)}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const TermsText = styled(Text)`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_210};
`

export const UnderlineTermText = styled(Text)`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.COLORS.GRAY_210};
`
