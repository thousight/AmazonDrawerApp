import { StyleSheet } from 'react-native'

import {
    cardSubtitleGrey,
    cardPriceRed
} from '../../styles/colors'

export default StyleSheet.create({
    cardImage: {
        height: 90,
        width: 90
    },
    cardTextWrapper: {
        flex: 1,
        alignItems: 'flex-start',
        height: 90,
        paddingHorizontal: 20
    },
    cardItemName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 3
    },
    cardItemCreator: {
        color: cardSubtitleGrey,
        fontSize: 11,
        marginBottom: 3
    },
    cardItemPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: cardPriceRed,
    },
    cardItemYouSave: {
        color: cardSubtitleGrey,
        fontWeight: '300',
        fontSize: 11
    }
})