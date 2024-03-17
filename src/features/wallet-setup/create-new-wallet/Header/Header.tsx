import Feather from '@expo/vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { moderateScale } from '@utils/metrics'

import { Container, HeaderArrowButton } from './styles'

interface HeaderProps {
  children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
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
          size={moderateScale(24)}
          color={COLORS.WHITE}
        />
      </HeaderArrowButton>

      {children}
    </Container>
  )
}
