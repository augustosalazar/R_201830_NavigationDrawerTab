import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right , Button} from 'native-base'

class CustomHeader extends Component {
    render() {
        return (
            <Header>
              <Left>

                <Button
                  transparent
                  onPress={() => this.props.drawerOpen()}>
                  <Icon name="menu" />
                </Button>


              </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}
export default CustomHeader;
