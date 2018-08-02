import React from 'react'
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { Container, Header, Content, ListItem, Left, Icon } from 'native-base'

import style from './style'
import commonStyle from '../../styles/common'

const DrawerContent = (props) => (
    <Container>
        <Header style={[style.drawerContentHeader, commonStyle.androidHeader]}>
            <Left style={style.drawerContentHeaderLeft}>
                <Icon style={style.drawerContentHeaderIcon} name="person" />
                <Text style={style.drawerContentHeaderText}>Mark Wen</Text>
            </Left>
        </Header>
        <Content>
            <FlatList
                data={props.items.map(item => item.routeName)}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <ListItem noBorder
                            onPress={() => props.navigation.navigate(item)}>
                            <Text>{item}</Text>
                        </ListItem>
                    </TouchableOpacity>
                )} />
        </Content>
    </Container>
)

export default DrawerContent