import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNav from './BottomTabNavigator'

import Home from '../screens/Home'
import SelectPhotosScreen from '../screens/SelectPhotos'
import PostDetails from '../screens/PostDetails'
import SelectCategory from '../screens/SelectCategory'

import colors from '../modal/color'

const Route = () => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: { backgroundColor: colors.backgroundColor },
        }}
      >
        <Stack.Screen name="BottomTabNav" component={BottomTabNav} options={{ headerShown: false }} />
        <Stack.Screen name="PostDetails" component={PostDetails} options={{ headerShown: false }} />
        <Stack.Screen name="SelectPhotos" component={SelectPhotosScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SelectCategory" component={SelectCategory} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Route
