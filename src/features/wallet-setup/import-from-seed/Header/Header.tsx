import Feather from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { moderateScale } from '@utils/metrics'

import { Container, HeaderArrowButton, HeaderTitle } from './styles'

export default function Header() {
  const navigation = useNavigation()
  const { COLORS } = useTheme()

  return (
    <Container>
      <HeaderArrowButton
        onPress={() => {
          navigation.goBack()
        }}
      >
        <Feather
          name="chevron-left"
          size={moderateScale(32)}
          color={COLORS.WHITE}
        />
      </HeaderArrowButton>

      <HeaderTitle>Import From Seed</HeaderTitle>
    </Container>
  )
}
