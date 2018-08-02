import React from 'react'
import { Text, FlatList } from 'react-native'
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
                    <ListItem noBorder>
                        <Text>{item}</Text>
                    </ListItem>
                )} />
        </Content>
    </Container>
)

export default DrawerContent