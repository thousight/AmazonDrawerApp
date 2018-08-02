import { StyleSheet, StatusBar, Platform } from 'react-native'

export default StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
              paddingTop: StatusBar.currentHeight
            }
          })
    }
})