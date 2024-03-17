import {
  type NativeStackNavigationProp,
  createNativeStackNavigator
} from '@react-navigation/native-stack'

import OnboardingScreen from '@features/onboarding'
import WalletSetupScreen from '@features/wallet-setup'
import ImportFromSeedScreen from '@features/wallet-setup/import-from-seed'
import CreateNewWalletScreen from '@features/wallet-setup/create-new-wallet'

type AuthRoutesProps = {
  onboarding: undefined
  walletSetup: undefined
  importFromSeed: undefined
  createNewWallet: undefined
}

export type AuthScreenProps = NativeStackNavigationProp<AuthRoutesProps>

const { Screen, Navigator } = createNativeStackNavigator<AuthRoutesProps>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="onboarding" component={OnboardingScreen} />
      <Screen name="walletSetup" component={WalletSetupScreen} />
      <Screen name="importFromSeed" component={ImportFromSeedScreen} />
      <Screen name="createNewWallet" component={CreateNewWalletScreen} />
    </Navigator>
  )
}
