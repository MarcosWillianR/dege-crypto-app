import { View, Text, Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { horizontalScale, verticalScale } from '@utils/metrics'

const { width } = Dimensions.get('screen')

interface StepProps {
  stepCount: number
  isCurrentStep: boolean
}

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const StepWrapper = styled(View)`
  flex-direction: row;
  gap: 16px;
`

// calc:
// 24 * 2 = Icon and Count width
// 24 * 2 = Header horizontal padding
// 16 * (step quantity) = Gap between
// 8 * 2 = container gap
// / (step quantity) = get current width
export const Step = styled(View)<StepProps>`
  width: ${(props) => horizontalScale((width - (24 * 2) - (24 * 2) - (16 * props.stepCount) - (8 * 2)) / props.stepCount)}px;
  height: ${verticalScale(8)}px;
  border-radius: ${horizontalScale(6)}px;
  background-color: ${(props) => props.isCurrentStep ? props.theme.COLORS.PRIMARY_500 : props.theme.COLORS.GRAY_250};
`

export const StepCount = styled(Text)`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_140};
`
