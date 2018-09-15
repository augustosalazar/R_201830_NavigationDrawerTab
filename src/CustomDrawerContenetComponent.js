import React from "react";
import { Image ,StyleSheet} from "react-native";
import {Container,Header,Body,Content}  from 'native-base'

export default const CustomDrawerContenetComponent = (props) => (
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

const styles = StyleSheet.create({
  image:{
    height:150,
    width:150,
    borderRadius:75,
  }
});
