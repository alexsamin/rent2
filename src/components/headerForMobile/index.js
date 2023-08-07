import { Text, View, TextInput } from 'react-native'

import styles from './styles'

import colors from '../../modal/color'

import { Feather, Ionicons } from '@expo/vector-icons'

const HeaderForMobile = () => {
  return (
    <>
      <View style={styles.searchTopContainer}>
        <View style={styles.searchTopHeader}>
          <Feather name="search" size={24} color={colors.blackColor} />
          <TextInput placeholder="Search in Rent.com" style={{ width: '100%', marginLeft: 5 }} multiline={false} />
        </View>
        <View style={styles.searchOptionsContainer}>
          <View style={styles.searchLocationCategory}>
            <Ionicons name="location" size={24} color={colors.blackColor} />
            <Text style={{ marginLeft: 5 }}>Location</Text>
            <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>New York</Text>
          </View>
          <View style={styles.searchLocationCategory}>
            <Ionicons name="md-settings-sharp" size={24} color={colors.blackColor} />
            <Text style={{ marginLeft: 5 }}>Category</Text>
            <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>Vehicle</Text>
          </View>
        </View>
      </View>
    </>
  )
}

export default HeaderForMobile
