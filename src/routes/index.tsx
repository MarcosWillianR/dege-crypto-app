import { NavigationContainer } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  const isLoggedIn = true

  return (
    <NavigationContainer>
      {isLoggedIn ? <AuthRoutes /> : <></>}
    </NavigationContainer>
  )
}
