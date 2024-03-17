import React from 'react'
import {
  ScrollView,
  Dimensions,
  SafeAreaView,
  Image,
  type NativeSyntheticEvent,
  type NativeScrollEvent
} from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

import { type AuthScreenProps } from '@routes/auth.routes'

import triangleImg from '@assets/onboarding_img/triangle.png'
import safeShieldImg from '@assets/onboarding_img/safe-shield.png'
import paperPlaneImg from '@assets/onboarding_img/paper-plane.png'

import TextGradient from '@components/TextGradient'
import Button from '@components/Button'

import {
  Container,
  OnboardingItemContent,
  ImageContainer,
  OnboardingCurrentItemContent,
  OnboardingCurrentItemDot,
  OnboardingFooter
} from './styles'

const { width } = Dimensions.get('window')

const ONBOARDING_DATA = [
  { title: 'Property Diversity', image: triangleImg },
  { title: 'Safe and Convenient', image: safeShieldImg },
  { title: 'Convenient Transaction', image: paperPlaneImg }
]

export default function OnboardingScreen() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const navigation = useNavigation<AuthScreenProps>()
  const scrollViewRef = React.useRef<ScrollView>(null)
  const { COLORS } = useTheme()

  const updateIndex = React.useCallback(
    (contentOffsetX: number) => {
      const newIndex = Math.round(contentOffsetX / width)
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex)
      }
    },
    [activeIndex]
  )

  const handleScroll = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x
      if (contentOffsetX >= 0) {
        updateIndex(contentOffsetX)
      }
    },
    [updateIndex]
  )

  const handleMomentumScrollEnd = React.useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x
      if (contentOffsetX >= 0) {
        let newIndex = Math.floor(contentOffsetX / width)
        if (contentOffsetX % width > width * 0.3) {
          newIndex++
        }
        scrollViewRef.current?.scrollTo({
          x: newIndex * width,
          animated: true
        })
        setActiveIndex(newIndex)
      }
    },
    []
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.GRAY_260 }}>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          pagingEnabled
          onScroll={handleScroll}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingHorizontal: 40 }}
        >
          {ONBOARDING_DATA.map(({ image, title }, index) => (
            <OnboardingItemContent key={index}>
              <ImageContainer>
                <Image source={image} resizeMode="contain" />
              </ImageContainer>

              <TextGradient style={{ maxWidth: 240 }} size="XXXL">
                {title}
              </TextGradient>
            </OnboardingItemContent>
          ))}
        </ScrollView>

        <OnboardingFooter>
          <OnboardingCurrentItemContent>
            {ONBOARDING_DATA.map((_, index) => (
              <OnboardingCurrentItemDot
                key={index}
                isActive={activeIndex === index}
              />
            ))}
          </OnboardingCurrentItemContent>

          <Button
            type="secondary"
            onPress={() => {
              navigation.navigate('walletSetup')
            }}
          >
            Get Start
          </Button>
        </OnboardingFooter>
      </Container>
    </SafeAreaView>
  )
}
