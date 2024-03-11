import { View, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { horizontalScale, verticalScale } from '@utils/metrics'

const { width } = Dimensions.get('window')

interface OnboardingCurrentItemDotProps {
  isActive: boolean
}

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_260};
  flex: 1;
`

export const OnboardingItemContent = styled(View)`
  width: ${width}px;
  height: 100%;
  justify-content: center;
`

export const ImageContainer = styled(View)`
  width: ${horizontalScale(300)}px;
  height: ${verticalScale(300)}px; 
  margin-bottom: ${verticalScale(24)}px;
`

export const OnboardingCurrentItemContent = styled(View)`
  padding: ${verticalScale(8)}px ${horizontalScale(16)}px;
  gap: 4px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${verticalScale(16)}px;
`

export const OnboardingCurrentItemDot = styled(View)<OnboardingCurrentItemDotProps>`
  width: 8px;
  height: 8px;
  border-radius: 12px;
  background-color: ${({ isActive, theme }) => isActive ? theme.COLORS.PRIMARY_500 : theme.COLORS.GRAY_190};
`

export const OnboardingFooter = styled(View)`
  padding: ${verticalScale(42)}px ${horizontalScale(24)}px;
`
