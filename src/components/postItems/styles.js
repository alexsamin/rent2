import { StyleSheet } from 'react-native'

import colors from '../../modal/color'

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
    backgroundColor: colors.whiteColor,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    padding: 5,
    shadowColor: colors.blackColor,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 2,
    elevation: 5,
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
    backgroundColor: colors.whiteColor,
  },
  postTitle: { fontWeight: 'bold' },
  postLocation: { color: colors.greyColor },
  postPricing: {
    color: colors.primaryColor,
    backgroundColor: colors.secondaryColor,
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-start',
  },
})

export default styles
