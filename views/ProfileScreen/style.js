import { StyleSheet } from 'react-native'

import {
  headerPurple,
  headerBottomShadow,
  searchDropdownGrey,
  mainContentGrayBackground
} from '../../styles/colors'

export default StyleSheet.create({
  header: {
    backgroundColor: headerPurple,
    height: 90,
    borderBottomColor: headerBottomShadow
  },
  headerLeft: {
    flexDirection: 'row'
  },
  headerMenuIcon: {
    color: 'white',
    marginStart: 5
  },
  headerAmazonIcon: {
    color: 'white',
    fontSize: 32,
    marginStart: 15
  },
  headerCartIcon: {
    color: 'white'
  },
  contentWrapper: {
    backgroundColor: mainContentGrayBackground
  },
  recomViewCard: {
    marginStart: 10,
    marginEnd: 10
  },
  recomViewCardItem: {
    borderBottomWidth: 1,
    borderBottomColor: searchDropdownGrey
  }
})