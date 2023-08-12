import { useState, useEffect } from 'react'

import { Pressable, View, Text, TextInput, ScrollView, Image } from 'react-native'

import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'

import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import colors from '../../modal/color'
import styles from './styles'

const Listing = () => {
  // Hooks for image data
  const [imageData, setImageData] = useState([])
  // Auth related
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log('User Email : ' + user.attributes.email)
      console.log('User ID : ' + user.attributes.sub)
    })
    .catch(err => {
      console.log(err)
      //throw err
    })

  const navigation = useNavigation()

  const route = useRoute()
  useEffect(() => {
    if (!route.params) {
      console.log('There is no data in route. ')
    } else {
      if (route.params.imageData !== undefined) {
        setImageData(route.params.imageData)
      }
    }
  })

  return (
    <View style={styles.mainContainer}>
      <View style={{ marginTop: 30 }}>
        <Text>Upload images [Max 5 photos]</Text>
        <Pressable onPress={() => navigation.navigate('SelectPhotos')} style={styles.uploadImageButton}>
          <Ionicons name="add-circle-sharp" size={24} color={colors.secondaryColor} />
        </Pressable>
        <View>
          <ScrollView horizontal={true}>
            {imageData &&
              imageData.map((component, index) => (
                <Image
                  key={component.id}
                  source={{ uri: component.uri }}
                  style={{
                    height: 100,
                    width: 100,
                    marginBottom: 20,
                    marginTop: -5,
                    marginRight: 5,
                  }}
                />
              ))}
          </ScrollView>
        </View>
      </View>

      <Pressable style={styles.categoryContainer} onPress={() => navigation.navigate('SelectCategory')}>
        <View style={styles.categorySecondaryContainer}>
          <Ionicons name="options" size={24} color={colors.secondaryColor} />
          <Text style={{ marginLeft: 10 }}>Category</Text>
        </View>
        <AntDesign name="rightcircle" size={24} color={colors.secondaryColor} />
      </Pressable>

      <View style={styles.categoryContainer}>
        <View style={styles.categorySecondaryContainer}>
          <Entypo name="location" size={24} color={colors.secondaryColor} />
          <Text style={{ marginLeft: 10 }}>Location</Text>
        </View>
        <AntDesign name="rightcircle" size={24} color={colors.secondaryColor} />
      </View>

      <View style={styles.inputTextStyle}>
        <MaterialIcons name="title" size={24} color={colors.secondaryColor} />
        <TextInput placeholder="Adv Title" style={{ marginLeft: 10 }} />
      </View>

      <View style={styles.inputTextStyle}>
        <MaterialIcons name="description" size={24} color={colors.secondaryColor} />
        <TextInput placeholder="Write a Description" style={{ marginLeft: 10 }} />
      </View>

      <View style={[styles.inputTextStyle, { width: '50%' }]}>
        <FontAwesome name="rupee" size={24} color={colors.secondaryColor} />
        <TextInput placeholder="Add a value" style={{ marginLeft: 10 }} />
      </View>

      <View style={styles.submitButton}>
        <Text style={styles.submitText}>Post Ad</Text>
      </View>
    </View>
  )
}

export default withAuthenticator(Listing)
