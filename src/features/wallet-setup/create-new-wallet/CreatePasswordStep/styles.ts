import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import { horizontalScale, verticalScale } from '@utils/metrics'

export const Container = styled(View)`
  padding: 0px ${horizontalScale(24)}px;
  flex: 1;
`

export const Header = styled(View)`
  align-items: center;
  gap: ${horizontalScale(8)}px;
  margin-bottom: ${verticalScale(40)}px;
`

export const Description = styled(Text)`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  text-align: center;
`
