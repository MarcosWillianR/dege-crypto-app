import React from 'react'

import { Container, StepWrapper, Step, StepCount } from './styles'

interface StepIndicatorProps {
  currentStep: number
  maxSteps: number
}

export default function StepIndicator({
  currentStep,
  maxSteps
}: StepIndicatorProps) {
  const steps = Array.from(Array(maxSteps).keys())

  return (
    <Container>
      <StepWrapper>
        {steps.map((step) => (
          <Step
            key={step}
            stepCount={maxSteps}
            isCurrentStep={currentStep === step}
          />
        ))}
      </StepWrapper>

      <StepCount>{`${currentStep + 1}/${maxSteps}`}</StepCount>
    </Container>
  )
}
