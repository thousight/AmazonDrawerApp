import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { CardItem, Right } from 'native-base'
import StarRating from 'react-native-star-rating'

import { cardStarColor, cardSubtitleGrey } from '../../styles/colors'

import style from './style'

class RecommendedCardItem extends Component {
    render() {
        const { image, itemName, itemCreator, itemPrice, savings, rating } = this.props
        return (
            <CardItem>
                <View>
                    <Image style={style.cardImage} source={image} />
                </View>
                <Right style={style.cardTextWrapper}>
                    <Text style={style.cardItemName}>{itemName}</Text>
                    <Text style={style.cardItemCreator}>{itemCreator}</Text>
                    <Text style={style.cardItemPrice}>${itemPrice}</Text>
                    <Text>
                        <Text style={style.cardItemYouSave}>You save </Text>
                        ${savings}
                    </Text>
                    <StarRating
                        disabled
                        rating={rating}
                        starSize={12}
                        fullStarColor={cardStarColor}
                        emptyStarColor={cardSubtitleGrey}
                        maxStars={5} />
                </Right>
            </CardItem>
        )
    }
}

export default RecommendedCardItem