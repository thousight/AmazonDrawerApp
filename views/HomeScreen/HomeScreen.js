import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Container, Content, Header, Left, Right, Icon } from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'

import style from './style'

class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={style.header}>
          <Left style={style.headerLeft}>
            <Icon name="md-menu" style={style.headerMenuIcon} />
            <FAIcon name="amazon" style={style.headerAmazonIcon} />
          </Left>
          <Right>
            <Icon name="md-cart" style={style.headerCartIcon} />
          </Right>
        </Header>
        <View style={style.searchContainer}>
          <TouchableOpacity>
            <View style={style.searchCategoryDropdown}>
              <Text style={style.searchCategoryDropdownShopByText}>Shop by:</Text>
              <Text style={style.searchCategoryDropdownSelectedOptionText}>Category</Text>
            </View>
          </TouchableOpacity>

          <View style={style.searchBar}>

          </View>
        </View>
      </Container>
    )
  }
}

export default HomeScreen