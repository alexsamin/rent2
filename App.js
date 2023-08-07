import { StyleSheet, SafeAreaView, Platform } from 'react-native'

import colors from './src/modal/color'

import HeaderForMobile from './src/components/headerForMobile'
import PostItems from './src/components/postItems'

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewForAndroid}>
      <HeaderForMobile />
      <PostItems />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaViewForAndroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    backgroundColor: colors.backgroundColor,
  },
})
