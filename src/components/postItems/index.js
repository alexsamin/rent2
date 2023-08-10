import { Text, View, Image, Pressable } from 'react-native'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const PostItems = () => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate('SelectPhotos')} style={styles.container}>
      <View style={styles.postMainContainer}>
        <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.postImage} />
        <View style={styles.postContentWrap}>
          <View>
            <Text style={styles.postTitle}>Good Property Heading</Text>
            <Text style={styles.postLocation}>New York</Text>
          </View>
          <Text style={styles.postPricing}>100 $ / day</Text>
        </View>
      </View>
    </Pressable>
  )
}

export default PostItems
