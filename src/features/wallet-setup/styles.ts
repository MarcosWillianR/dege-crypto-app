import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_260};
  flex: 1;
  justify-content: center;
  padding: 0 24px;
`

export const ImageContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`
export const WalletSetupFooter = styled(View)`
  padding-bottom: 24px;
`

export const ButtonGroup = styled(View)`
  margin-top: 40px;
  gap: 16px;
`
