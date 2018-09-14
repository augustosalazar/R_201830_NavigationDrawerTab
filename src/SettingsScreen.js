import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { Constants } from 'expo';
import {
  StatusBar,
} from 'react-native'

import {Icon,Button,Container, Header, Content,Left,Body,Title} from 'native-base'

import CustomHeader from './Components/CustomHeader'

export default class SettingScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }}
      onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/setting.png')}
        style={styles.icon}
      />
    ),
  })

  render() {
    return (
      <Container style={{marginTop: StatusBar.currentHeight}}>
        <CustomHeader title="Settings" drawerOpen={() => this.props.navigation.openDrawer()} />
        <Content contentContainerStyle={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Text>SettingScreen</Text>
        </Content>
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
