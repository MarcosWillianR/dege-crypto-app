import React from 'react'
import { SafeAreaView, Image } from 'react-native'
import { useTheme } from 'styled-components/native'

import cardEngineImg from '@assets/walletsetup_img/card-engine.png'

import TextGradient from '@components/TextGradient'
import Button from '@components/Button'

import {
  Container,
  ImageContainer,
  WalletSetupFooter,
  ButtonGroup
} from './styles'

export default function WalletSetupScreen() {
  const { COLORS } = useTheme()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_260 }}>
      <Container>
        <ImageContainer>
          <Image source={cardEngineImg} resizeMode="contain" />
        </ImageContainer>

        <WalletSetupFooter>
          <TextGradient size="XXXL">Wallet setup</TextGradient>
          <ButtonGroup>
            <Button type="secondary">Import Using Seed Phrase</Button>
            <Button>Create a New Wallet</Button>
          </ButtonGroup>
        </WalletSetupFooter>
      </Container>
    </SafeAreaView>
  )
}
