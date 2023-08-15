import { useState, useEffect } from 'react'

import { Pressable, View, Text, TextInput, ScrollView, Image } from 'react-native'

import { withAuthenticator } from 'aws-amplify-react-native'
import { Auth, Storage, API, graphqlOperation } from 'aws-amplify'
import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'

import { createListing } from '../../graphql/mutations'

import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

import colors from '../../modal/color'
import styles from './styles'
import color from '../../modal/color'

const Listing = () => {
  // Hooks for image data
  const [imageData, setImageData] = useState([])
  const [category, setCategory] = useState({ catID: 0, catName: 'Category' })
  const [location, setLocation] = useState({ locID: 0, locName: 'Location' })
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rent, setRent] = useState('')
  const [userID, setUserID] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [postProcessing, setPostProcessing] = useState(false)
  const [postSuccess, setPostSuccess] = useState(false)

  // Auth related
  Auth.currentAuthenticatedUser()
    .then(user => {
      console.log('User Email : ' + user.attributes.email)
      console.log('User ID : ' + user.attributes.sub)
      setUserID(user.attributes.sub)
      setUserEmail(user.attributes.email)
    })
    .catch(err => {
      console.log(err)
      throw err
    })

  const navigation = useNavigation()

  const route = useRoute()
  useEffect(() => {
    if (!route.params) {
      console.log('There is no data in route. ')
    } else {
      if (route.params.imageData !== undefined) {
        console.log(route.params.imageData)
        setImageData(route.params.imageData)
      } else if (route.params.catID !== undefined) {
        console.log(route.params)
        //setCategory({ catID: route.params.catID, catName: route.params.catName })
        setCategory(route.params)
      } else if (route.params.locID !== undefined) {
        console.log(route.params)
        //setLocation({ locID: route.params.locID, locName: route.params.locName })
        setLocation(route.params)
      }
    }
  })

  // func from stack overflow
  // https://stackoverflow.com/questions/48108791/convert-image-path-to-blob-react-native/76723760#76723760
  const uriToBlob = uri => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        // return the blob
        resolve(xhr.response)
      }
      xhr.onerror = function () {
        reject(new Error('uriToBlob failed'))
      }
      xhr.responseType = 'blob'
      xhr.open('GET', uri, true)

      xhr.send(null)
    })
  }

  const imageAllUrl = []
  const storeToDB = async () => {
    // store data to DynamoDB and image in S3
    console.log('Inside storeToDB: ' + imageData)
    imageData &&
      imageData.map(async (component, index) => {
        console.log(component)
        const imageUri = component.uri.replace('file:///', 'file:/')
        console.log(imageUri)
        const blobFile = await uriToBlob(imageUri)
        const urlParts = imageUri.split('.')
        const extension = urlParts[urlParts.length - 1]
        var uniqueFileName = `${uuidv4()}.${extension}`
        console.log(uniqueFileName)

        imageAllUrl.push({ imageUri: uniqueFileName })

        // Storing image in S3 bucket storage
        await Storage.put(uniqueFileName, blobFile)
        setPostProcessing(true)
        // Storing other data in DynamoDB
        // below if condition for last record check => to be executed at the last step/value
        if (imageData.length == index + 1) {
          const postData = {
            title: title,
            categoryName: category.catName,
            categoryID: category.catID,
            description: description,
            images: JSON.stringify(imageAllUrl),
            locationID: location.locID,
            locationName: location.locName,
            owner: userEmail,
            rent: rent,
            userID: userID,
            commonID: '1',
          }
          console.log(postData)
          // without Auth
          //await API.graphql(graphqlOperation(createListing, { input: postData }))
          console.log('posting data now....')
          try {
            //await API.graphql(graphqlOperation(createListing, { input: postData }, 'AMAZON_COGNITO_USER_POOLS'))
            await API.graphql({
              query: createListing,
              variables: { input: postData },
              authMode: 'AMAZON_COGNITO_USER_POOLS',
            })
          } catch (err) {
            console.log(err)
            //throw err
          }

          // await API.graphql({
          //   query: createListing,
          //   variables: { input: postData },
          //   authMode: 'AMAZON_COGNITO_USER_POOLS',
          // })
          console.log('data is posted... ')
          setPostProcessing(false)
          setPostSuccess('Your Ad have been successfully posted.')
        }

        // if (Platform.OS === 'web') {
        //   setPostProcessing(false)
        //   navigation.navigate('Home', { screen: 'Explore' })
        // } else {
        //   setPostProcessing(false)
        //   setPostSuccess('Your adv have successfully published.')
        // }

        // try {
        //   uploadBytes(storageRef, blobFile).then(async snapshot => {
        //     console.log('snapshot', snapshot)
        //     const url = await getDownloadURL(storageRef)
        //     return url
        //   })
        // } catch (err) {
        //   console.log(err)
        //   return null
        // }
        //const response = await fetch(imageUri)
        //const blob = await response.blob()
        //console.log('response : ', JSON.stringify(response))
        console.log(imageAllUrl)
      })
  }

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={{ marginTop: 0 }}>
        <Text>Upload images [Max 5 photos]</Text>
        <Pressable onPress={() => navigation.navigate('SelectPhotos')} style={styles.uploadImageButton}>
          <Ionicons name="add-circle-sharp" size={24} color={colors.secondaryColor} />
        </Pressable>
        <View>
          <ScrollView horizontal={true}>{imageData && imageData.map((component, index) => <Image key={component.id} source={{ uri: component.uri }} style={styles.imageStyle} />)}</ScrollView>
        </View>
      </View>

      <Pressable style={styles.categoryContainer} onPress={() => navigation.navigate('SelectCategory')}>
        <View style={styles.categorySecondaryContainer}>
          <Ionicons name="options" size={24} color={colors.secondaryColor} />
          <Text style={{ marginLeft: 10 }}>{category.catName}</Text>
        </View>
        <AntDesign name="rightcircle" size={24} color={colors.secondaryColor} />
      </Pressable>

      <Pressable style={styles.categoryContainer} onPress={() => navigation.navigate('SelectLocation')}>
        <View style={styles.categorySecondaryContainer}>
          <Entypo name="location" size={24} color={colors.secondaryColor} />
          <Text style={{ marginLeft: 10 }}>{location.locName}</Text>
        </View>
        <AntDesign name="rightcircle" size={24} color={colors.secondaryColor} />
      </Pressable>

      <View style={styles.inputTextStyle}>
        <MaterialIcons name="title" size={24} color={colors.secondaryColor} />
        <TextInput placeholder="Adv Title" style={{ marginLeft: 10, width: '100%' }} onChangeText={text => setTitle(text)} />
      </View>

      <View style={styles.inputTextStyle}>
        <MaterialIcons name="description" size={24} color={colors.secondaryColor} />
        <TextInput placeholder="Write a Description" style={{ marginLeft: 10, width: '100%' }} onChangeText={text => setDescription(text)} multiline={true} numberOfLines={3} />
      </View>

      <View style={[styles.inputTextStyle, { width: '50%' }]}>
        <FontAwesome name="rupee" size={24} color={colors.secondaryColor} />
        <TextInput placeholder="Add a value" style={{ marginLeft: 10 }} onChangeText={text => setRent(text)} keyboardType="number-pad" />
      </View>

      <Pressable style={styles.submitButton} onPress={() => storeToDB()} android_ripple={{ color: colors.secondaryColor }}>
        <Text style={styles.submitText}>{postProcessing ? 'Processing...' : 'Post Ad'}</Text>
      </Pressable>
    </ScrollView>
  )
}

export default withAuthenticator(Listing)
