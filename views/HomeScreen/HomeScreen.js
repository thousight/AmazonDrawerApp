import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base'
import FAIcon from 'react-native-vector-icons/FontAwesome'
import Swiper from 'react-native-swiper'

import RecommededCard from '../../components/RecommendedCard'

import style from './style'
import commonStyle from '../../styles/common'

import swiper_2 from '../../assets/swiper_2.jpg'
import swiper_3 from '../../assets/swiper_3.jpg'
import recommended_1 from '../../assets/recommended_1.jpg'
import recommended_2 from '../../assets/recommended_2.jpg'
import recommended_3 from '../../assets/recommended_3.jpg'

class HomeScreen extends Component {
  state = {
    search: ''
  }

  render() {
    const { search } = this.state
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

        {/* Search Dropdown */}
        <View style={style.searchContainer}>
          <TouchableOpacity>
            <View style={style.searchCategoryDropdown}>
              <Text style={style.searchCategoryDropdownShopByText}>Shop by:</Text>
              <Text style={style.searchCategoryDropdownSelectedOptionText}>Category</Text>
            </View>
          </TouchableOpacity>

          {/* Search Bar */}
          <View style={style.searchBar}>
            <Item style={style.searchBarItemWrapper}>
              <Icon name="search" style={style.searchBarSearchIcon} />
              <Input placeholder="Search" value={search} onChange={e => this.setState({ search: e.target.value })} />
            </Item>
          </View>
        </View>

        {/* Main Content */}
        <Content style={style.contentWrapper}>
          {/* Greeting */}
          <View style={style.introContentWrapper}>
            <Text>Hello, Mark Wen!</Text>
            <View style={style.introContentLink}>
              <Text>Your Account</Text>
              <Icon name="arrow-forward" style={style.introContentLinkArrow} />
            </View>
          </View>

          {/* Recommendation View */}
          <Swiper style={style.recomSwiper} autoplay >
            <View style={style.recomViewWrapper}>
              <Image style={style.recomViewImage} source={swiper_2} />
            </View>
            <View style={style.recomViewWrapper}>
              <Image style={style.recomViewImage} source={swiper_3} />
            </View>
            <View style={style.recomViewWrapper}>
              <Image style={style.recomViewImage} source={swiper_2} />
            </View>
          </Swiper>

          <Card style={style.recomViewCard}>
            <CardItem style={style.recomViewCardItem} header>
              <Text>Your Recommendations</Text>
            </CardItem>

            <RecommededCard
              image={recommended_1}
              itemName="You Can Heal Your Life"
              itemCreator="Louise Hay"
              itemPrice={10}
              savings={2.5}
              rating={4} />

            <RecommededCard
              image={recommended_2}
              itemName="Uncharted 4"
              itemCreator="Sony"
              itemPrice={19.99}
              savings={17}
              rating={5} />

            <RecommededCard
              image={recommended_3}
              itemName="EA UFC 3"
              itemCreator="EA Sports"
              itemPrice={44}
              savings={6}
              rating={3} />
          </Card>
        </Content>
      </Container>
    )
  }
}

export default HomeScreen