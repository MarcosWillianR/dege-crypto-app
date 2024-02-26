import { LinearGradient } from 'expo-linear-gradient'
import { Text, type TextProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import MaskedView from '@react-native-masked-view/masked-view'

type size =
  | 'XS'
  | 'SM'
  | 'MD'
  | 'LG'
  | 'XL'
  | 'XXL'
  | 'XXXL'
  | 'XXXXL'
  | 'XXXXXL'
  | 'XXXXXXL'

interface TextGradientProps extends TextProps {
  children: React.ReactNode
  size?: size
}

export default function TextGradient({
  children,
  size = 'MD',
  style,
  ...rest
}: TextGradientProps) {
  const { FONT_SIZE } = useTheme()

  const fontSize = FONT_SIZE[size]

  return (
    <MaskedView
      maskElement={
        <Text style={[style, { fontSize }]} {...rest}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={['#A9CDFF', '#72F6D1', '#A0ED8D', '#FED365', '#FAA49E']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1.3, y: 0 }}
      >
        <Text style={[style, { fontSize, opacity: 0 }]}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  )
}
