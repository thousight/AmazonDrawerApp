import { createDrawerNavigator } from 'react-navigation'

import DrawerContent from './DrawerContent'

import HomeScreen from '../views/HomeScreen'
import ProfileScreen from '../views/ProfileScreen'

const AppDrawerNavigator = new createDrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
}, {
    drawerPosition: 'left',
    contentComponent: DrawerContent,
  })

export default AppDrawerNavigator