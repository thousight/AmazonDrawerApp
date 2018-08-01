import { createDrawerNavigator } from 'react-navigation'

import HomeScreen from '../views/HomeScreen'

const AppDrawerNavigator = new createDrawerNavigator({
    Home: {
      screen: HomeScreen
    }
  })

export default AppDrawerNavigator