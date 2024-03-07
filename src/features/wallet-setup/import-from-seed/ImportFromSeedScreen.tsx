import Feather from '@expo/vector-icons/Feather'
import { SafeAreaView } from 'react-native'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import { Container, Header, HeaderArrowButton, HeaderTitle } from './styles'

export default function ImportFromSeedScreen() {
  const { COLORS } = useTheme()
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_260 }}>
      <Container>
        <Header>
          <HeaderArrowButton
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Feather name="chevron-left" size={32} color={COLORS.WHITE} />
          </HeaderArrowButton>

          <HeaderTitle>Import From Seed</HeaderTitle>
        </Header>
      </Container>
    </SafeAreaView>
  )
}
