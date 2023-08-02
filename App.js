import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text>Arise & Shine!</Text> */}
      <View style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
        <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.postImage} />
        <View style={styles.textDescription}>
          <View>
            <Text>Property Heading</Text>
            <Text>Apartement in New Year</Text>
          </View>
          <Text>100 $ / day</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavendar',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  textDescription: {
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
  },
})
