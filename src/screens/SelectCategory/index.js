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

const SelectCategory = () => {
  // State Hooks for Category
  const [categoryData, setCategoryData] = useState({
    names: [
      {
        id: 0,

        fullIcon: <Entypo style={styles.catIcon} name="home" size={24} color="black" />,
        name: 'Apartment',
      },
      {
        id: 1,
        fullIcon: <Ionicons style={styles.catIcon} name="car-sport" size={24} color="black" />,
        name: 'Vehicle',
      },
      {
        id: 2,
        fullIcon: <MaterialIcons style={styles.catIcon} name="room-preferences" size={24} color="black" />,
        name: 'Household Items',
      },
      {
        id: 3,
        fullIcon: <Entypo style={styles.catIcon} name="book" size={24} color="black" />,
        name: 'Books',
      },
      {
        id: 4,
        fullIcon: <AntDesign style={styles.catIcon} name="paperclip" size={24} color="black" />,
        name: 'Office Equipment',
      },
    ],
  })

  const navigation = useNavigation()

  return (
    <ScrollView>
      <Text style={styles.categoryText}>Choose a Category</Text>
      {/* Displaying all the category list */}
      {categoryData.names.map((item, index) => (
        <Pressable
          key={item.id}
          android_ripple={{ color: colors.greyColor }}
          style={styles.selectCategoryPressable}
          onPress={() => {
            navigation.navigate('Lists', {
              catID: item.id,
              catName: item.name,
            })
          }}
        >
          {item.fullIcon}
          <Text>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  )
}

export default SelectCategory
