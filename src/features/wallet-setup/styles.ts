import { View } from 'react-native'
import styled from 'styled-components/native'

import { verticalScale, horizontalScale } from '@utils/metrics'

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_260};
  flex: 1;
  justify-content: center;
  padding: 0 ${horizontalScale(24)}px;
`

export const ImageContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const WalletSetupFooter = styled(View)`
  padding-bottom: ${verticalScale(24)}px;
`

export const ButtonGroup = styled(View)`
  margin-top: ${verticalScale(40)}px;
  gap: 16px;
`
