import { StyleSheet } from 'react-native'

import colors from '../../modal/color'

const styles = StyleSheet.create({
  searchTopContainer: {
    padding: 10,
    backgroundColor: colors.primaryColor,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchTopHeader: {
    flexDirection: 'row',
    backgroundColor: colors.whiteColor,
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  searchOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  searchLocationCategory: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default styles
