import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, Platform, View, Text, TextInput } from 'react-native'

import { Feather, Ionicons } from '@expo/vector-icons'

import PostItems from './src/components/postItems'

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewForAndroid}>
      <View style={styles.searchContainer}>
        <View style={styles.searchHeader}>
          <Feather name="search" size={20} color="black" />
          <TextInput placeholder="Search in Rent.com" style={{ width: '100%', marginLeft: 5 }} multiline={false} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="location" size={24} color="black" />
            <Text style={{ marginLeft: 5 }}>Location</Text>
            <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>New York</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="md-settings-sharp" size={24} color="black" />
            <Text style={{ marginLeft: 5 }}>Category</Text>
            <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Vehicle</Text>
          </View>
        </View>
      </View>
      <PostItems />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaViewForAndroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: '#fec85c60',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#fec85c',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
})
