import { StyleSheet } from 'react-native'
import colors from '../../modal/color'

export default styles = StyleSheet.create({
  catIcon: {
    marginRight: 10,
  },
  SelectLocationPressable: {
    padding: 15,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyColor,
  },
  locationText: { fontSize: 20, margin: 20 },
})
