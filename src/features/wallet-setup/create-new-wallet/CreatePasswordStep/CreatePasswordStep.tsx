import React from 'react'

import TextGradient from '@components/TextGradient'

import { Container, Header, Description } from './styles'

interface CreatePasswordStepProps {
  onNextStep: () => void
}

export default function CreatePasswordStep({
  onNextStep
}: CreatePasswordStepProps) {
  return (
    <Container>
      <Header>
        <TextGradient size="LG">Create Password</TextGradient>

        <Description>
          This password will unlock your Metamask wallet only on this service
        </Description>
      </Header>
    </Container>
  )
}
