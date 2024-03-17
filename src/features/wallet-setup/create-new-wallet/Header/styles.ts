import { View, Pressable } from 'react-native'
import styled from 'styled-components/native'

import { verticalScale, horizontalScale } from '@utils/metrics'

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`

export const HeaderArrowButton = styled(Pressable)`
  padding: ${verticalScale(42)}px ${horizontalScale(24)}px;
`
