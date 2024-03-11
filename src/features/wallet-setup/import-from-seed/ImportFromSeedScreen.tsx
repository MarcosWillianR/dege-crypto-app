import { SafeAreaView, Switch } from 'react-native'
import { useTheme } from 'styled-components'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import Header from './Header'

import TextInput from '@components/TextInput'
import Button from '@components/Button'

import { moderateScale } from '@utils/metrics'

import {
  Container,
  FormScrollView,
  SeedPhraseWrapper,
  ScanButton,
  FaceIdWrapper,
  FaceIdText,
  TermsText,
  UnderlineTermText
} from './styles'

export default function ImportFromSeedScreen() {
  const { COLORS } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_260 }}>
      <Header />

      <Container>
        <FormScrollView keyboardShouldPersistTaps="handled">
          <SeedPhraseWrapper>
            <TextInput placeholder="Seed Phrase" multiline />

            <ScanButton>
              <MaterialCommunityIcons
                name="line-scan"
                size={moderateScale(24)}
                color={COLORS.PRIMARY_500}
              />
            </ScanButton>
          </SeedPhraseWrapper>

          <TextInput placeholder="New Password" />

          <TextInput placeholder="Confirm Password" />

          <FaceIdWrapper>
            <FaceIdText>Sign in with Face ID?</FaceIdText>
            <Switch />
          </FaceIdWrapper>

          <TermsText>
            Byproceeding, you agree to these{' '}
            <UnderlineTermText>Term and Conditions.</UnderlineTermText>
          </TermsText>
        </FormScrollView>

        <Button disabled>Import</Button>
      </Container>
    </SafeAreaView>
  )
}
