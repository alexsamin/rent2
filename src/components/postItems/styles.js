import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeAreaViewForAndroid: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    flex: 1,
  },
  container: {
    flex: 1,
    // backgroundColor: '#fec85c40',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  postMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 5,
  },
  postImage: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 5,
  },
  postContentWrap: {
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
    elevation: 5,
  },
  postTitle: { fontWeight: 'bold' },
  postLocation: { color: 'grey' },
  postPricing: {
    color: '#fec85c',
    backgroundColor: '#293241',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-start',
  },
})

export default styles
