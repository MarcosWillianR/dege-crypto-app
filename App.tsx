import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

import theme from './src/theme';

import Onboarding from './src/features/onboarding';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <Onboarding />
        <StatusBar style="auto" />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#17171A' } });
