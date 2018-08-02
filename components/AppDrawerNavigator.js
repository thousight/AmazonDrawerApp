import { createDrawerNavigator } from 'react-navigation'

import DrawerContent from './DrawerContent'

import HomeScreen from '../views/HomeScreen'

const AppDrawerNavigator = new createDrawerNavigator({
  Home: { screen: HomeScreen }
}, {
    drawerPosition: 'left',
    contentComponent: DrawerContent,
  })

export default AppDrawerNavigator