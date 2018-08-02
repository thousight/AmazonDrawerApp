import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { Container, Content, Header, Left, Right, Icon, Card, CardItem } from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'

import style from './style'
import commonStyle from '../../styles/common'

class HomeScreen extends PureComponent {
  render() {
    return (
      <Container>
        {/* Header */}
        <Header style={[style.header, commonStyle.androidHeader]}>
          <Left style={style.headerLeft}>
            <Icon name="md-menu"
              style={style.headerMenuIcon}
              onPress={() => this.props.navigation.openDrawer()} />
            <FAIcon name="amazon" style={style.headerAmazonIcon} />
          </Left>
          <Right>
            <Icon name="md-cart" style={style.headerCartIcon} />
          </Right>
        </Header>

        {/* Main Content */}
        <Content style={style.contentWrapper}>
          <Card style={style.recomViewCard}>
            <CardItem style={style.recomViewCardItem} header>
            <Text>Hello, Mark Wen!</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

export default HomeScreen