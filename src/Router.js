import React from "react";
import { Platform, StatusBar,Image ,StyleSheet} from "react-native";

import { createDrawerNavigator,DrawerItems } from 'react-navigation'

import {Container,Header,Body,Content}  from 'native-base'
import SettingsScreen from './SettingsScreen'
import HomeScreen from './HomeScreen'
//import CustomDrawerContenetComponent from './CustomDrawerContenetComponent'

  const CustomDrawerContenetComponent = (props) => (
    <Container>
      <Header style={{height:200}}>
        <Body>
          <Image
            style={styles.image}
            source={require('../assets/logo1.png')}
          />
        </Body>
      </Header>
      <Content>
        <DrawerItems {...props}/>
      </Content>
    </Container>
  )

export const createMyDrawerNavigator = () => {
  return  createDrawerNavigator({
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
}

const styles = StyleSheet.create({
  image:{
    height:150,
    width:150,
    borderRadius:75,
  }
});
