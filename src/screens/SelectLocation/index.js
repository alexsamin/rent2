import { useState, useEffect } from 'react'

import { Pressable, View, Text, TextInput, ScrollView, Image } from 'react-native'
import HeaderForMobile from '../../components/headerForMobile'
import PostItems from '../../components/postItems'
import { useNavigation } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import colors from '../../modal/color'
import styles from './styles'

const SelectLocation = () => {
  // State Hooks for Category
  const [locationState, setLocationState] = useState({
    names: [
      {
        id: 0,
        name: 'Manhattan',
      },
      {
        id: 1,
        name: 'Moonachie',
      },
      {
        id: 2,
        name: 'Hackensack',
      },
      {
        id: 3,
        name: 'Athenia',
      },
      {
        id: 4,
        name: 'Wayne',
      },
    ],
  })

  const navigation = useNavigation()

  return (
    <ScrollView>
      <Text style={styles.locationText}>Choose a Location</Text>
      {/* Displaying all the Location list */}
      {locationState.names.map((item, index) => (
        <Pressable
          key={item.id}
          android_ripple={{ color: colors.greyColor }}
          style={styles.SelectLocationPressable}
          onPress={() => {
            navigation.navigate('Lists', {
              locID: item.id,
              locName: item.name,
            })
          }}
        >
          {/* {item.fullIcon} */}
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  )
}

export default SelectLocation
