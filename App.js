import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import 'react-native-gesture-handler'
import { Amplify, Auth } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)
// Amplify.configure({
//   ...awsconfig,
//   Analytics: {
//     disabled: true,
//   },
// })

import colors from './src/modal/color'

import Home from './src/screens/Home'
import Route from './src/navigation/Router'

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaViewForAndroid}>
      <StatusBar style="auto" backgroundColor={colors.backgroundColor} />
      <Route />
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
