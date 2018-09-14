import React, { Component } from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { Constants } from 'expo';

import {
  Icon,
  Button,
  Container,
  Header,
  Content,
  Left,
  Body,
  Title,
  Tabs,
  Tab,
  ScrollableTab,
} from 'native-base';

import {
  StatusBar,
} from 'react-native'

import TabOne from './tabOne'
import TabTwo from './tabTwo'

import CustomHeader from './Components/CustomHeader'

export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/home.png')}
        style={styles.icon}
      />
    ),
  })

  render() {
    return (
      <Container style={{marginTop: StatusBar.currentHeight}} >

        <CustomHeader title="Home" drawerOpen={() => this.props.navigation.openDrawer()} />

        <Tabs initialPage={0} renderTabBar={() => <ScrollableTab />}>
          <Tab heading="I need">
            <TabOne />
          </Tab>
          <Tab heading="Available">
            <TabTwo />
          </Tab>

        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
      width: 24,
      height: 24,
    },
});
