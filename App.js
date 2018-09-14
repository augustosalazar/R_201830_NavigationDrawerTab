import * as React from 'react';
import { Text, View, StyleSheet,Button,Image } from 'react-native';
import { createDrawerNavigator,DrawerItems } from 'react-navigation'
import SettingsScreen from './src/SettingsScreen'
import HomeScreen from './src/HomeScreen'
import {Container,Header,Body,Content}  from 'native-base'

//https://www.youtube.com/watch?v=bJmsmrRtMyw

const CustomDrawerContenetComponent = (props) => (
  <Container>
    <Header style={{height:200}}>
      <Body>
        <Image
          style={styles.image}
          source={require('./assets/logo1.png')}
        />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const MyApp = createDrawerNavigator({
  Home:{
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen,
  }
}, {
  contentComponent: CustomDrawerContenetComponent,
  drawerWidth: 250,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
}
)

export default class App extends React.Component {
  render() {
    return (
        <MyApp/>
    );
  }
}

const styles = StyleSheet.create({
  image:{
    height:150,
    width:150,
    borderRadius:75,
  }
});
