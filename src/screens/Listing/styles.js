import { StyleSheet } from 'react-native'
import colors from '../../modal/color'

export default styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  imageStyle: {
    height: 100,
    width: 100,
    marginBottom: 20,
    marginTop: -5,
    marginRight: 5,
  },
  uploadImageButton: {
    display: 'flex',
    backgroundColor: colors.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 30,
    marginVertical: 20,
  },
  categoryContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.whiteColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  categorySecondaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputTextContainer: {
    // backgroundColor: colors.whiteColor,
  },
  inputTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.whiteColor,
    borderRadius: 20,
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  submitText: {
    color: colors.whiteColor,
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: 'bold',
  },
  submitButton: {
    margin: 10,
    borderRadius: 30,
    backgroundColor: colors.secondaryColor,
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 5,
    // marginBottom: 20,
    elevation: 5,
  },
})
