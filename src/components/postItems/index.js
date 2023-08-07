import { Text, View, Image } from 'react-native'

import styles from './styles'

const PostItems = () => {
  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default PostItems
