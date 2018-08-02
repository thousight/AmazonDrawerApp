import { StyleSheet } from 'react-native'

import {
    headerPurple
} from '../../styles/colors'

export default StyleSheet.create({
    drawerContentHeader: {
        backgroundColor: headerPurple,
        height: 90
    },
    drawerContentHeaderLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    drawerContentHeaderIcon: {
        color: 'white',
        marginEnd: 5
    },
    drawerContentHeaderText: {
        marginStart: 5,
        fontSize: 18,
        color: 'white'
    }
})