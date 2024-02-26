import { View, Dimensions } from 'react-native'
import styled from 'styled-components/native'

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
  width: 300px;
  height: 300px; 
  margin-bottom: 24px;
`

export const OnboardingCurrentItemContent = styled(View)`
  padding: 8px 16px;
  gap: 4px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 16px;
`

export const OnboardingCurrentItemDot = styled(View)<OnboardingCurrentItemDotProps>`
  width: 8px;
  height: 8px;
  border-radius: 12px;
  background-color: ${({ isActive, theme }) => isActive ? theme.COLORS.PRIMARY_500 : theme.COLORS.GRAY_190};
`

export const OnboardingFooter = styled(View)`
  padding: 42px 40px;
`
