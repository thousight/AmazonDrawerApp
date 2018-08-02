import { StyleSheet, StatusBar, Platform } from 'react-native'

import {
  headerPurple,
  headerBottomShadow,
  searchDropdownGrey,
  mainContentGrayBackground
} from '../../styles/colors'

export default StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        paddingTop: StatusBar.currentHeight
      }
    })
  },
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
    marginStart: 5,
    justifyContent: 'center'
  },
  searchBarItemWrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 4
  },
  searchBarSearchIcon: {
    fontSize: 20,
    paddingTop: 5
  },
  contentWrapper: {
    backgroundColor: mainContentGrayBackground,
    marginTop: 70
  },
  introContentWrapper: {
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  introContentLink: {
    flexDirection: 'row',
  },
  introContentLinkArrow: {
    fontSize: 18,
    marginStart: 5
  },
  recomSwiper: {
    height: 100
  },
  recomViewWrapper: {
    flex: 1
  },
  recomViewImage: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'contain'
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