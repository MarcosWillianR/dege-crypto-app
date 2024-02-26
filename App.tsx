import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components/native'
import * as SplashScreen from 'expo-splash-screen'

import theme from './src/theme'

import Onboarding from './src/features/onboarding'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf')
  })

  React.useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }

    if (fontsLoaded) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      hideSplashScreen()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <Onboarding />
      <StatusBar style="light" />
    </ThemeProvider>
  )
}
