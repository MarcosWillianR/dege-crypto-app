import { View } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled(View)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_260};
  flex: 1;
  align-items: center;
  justify-content: center;
`
