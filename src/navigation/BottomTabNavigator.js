import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import PostDetails from '../screens/PostDetails'
import Listing from '../screens/Listing'

import colors from '../modal/color'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: colors.backgroundColor }}
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primaryColor,
        tabBarActiveTintColor: colors.secondaryColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={25} color={colors.secondaryColor} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Lists"
        component={Listing}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="list" size={25} color={colors.blackColor} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={PostDetails}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="chat" size={25} color={colors.blackColor} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PostDetails}
        options={{
          tabBarIcon: ({ color }) => <Feather name="user" size={25} color={colors.blackColor} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNav
