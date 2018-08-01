import { StyleSheet } from 'react-native'

import { headerPurple, headerBottomShadow, searchDropdownGrey } from '../../styles/colors'

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
    searchContainer: {
      backgroundColor: headerPurple,
      position: 'absolute',
      left: 0,
      right: 0,
      top: 90,
      height: 70,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 5
    },
    searchCategoryDropdown: {
      backgroundColor: searchDropdownGrey,
      height: 50,
      borderRadius: 4,
      marginStart: 5,
      padding: 10,
      width: 100
    },
    searchCategoryDropdownShopByText: {
      fontSize: 12
    },
    searchCategoryDropdownSelectedOptionText: {
      fontWeight: 'bold'
    },
    searchBar: {
      flex: 1,
      height: '100%',
      marginStart: 5
    }
  })