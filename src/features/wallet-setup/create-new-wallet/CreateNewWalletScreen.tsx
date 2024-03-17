import React from 'react'
import { SafeAreaView } from 'react-native'
import { useTheme } from 'styled-components'

import Header from './Header'
import StepIndicator from './StepIndicator'
import ConfirmSeedStep from './ConfirmSeedStep'
import CreatePasswordStep from './CreatePasswordStep'
import SecureWalletStep from './SecureWalletStep'

import { Container } from './styles'

const MAX_STEPS = 3

export default function CreateNewWalletScreen() {
  const { COLORS } = useTheme()

  const [currentStep, setCurrentStep] = React.useState(0)

  function handleNextStep() {
    setCurrentStep((currentStep) => currentStep + 1)
  }

  function currentStepComponent() {
    const availableStepComponents: Record<number, React.JSX.Element> = {
      0: <CreatePasswordStep onNextStep={handleNextStep} />,
      1: <SecureWalletStep onNextStep={handleNextStep} />,
      2: <ConfirmSeedStep onNextStep={handleNextStep} />
    }

    return availableStepComponents[currentStep]
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_260 }}>
      <Container>
        <Header>
          <StepIndicator currentStep={currentStep} maxSteps={MAX_STEPS} />
        </Header>

        {currentStepComponent()}
      </Container>
    </SafeAreaView>
  )
}
