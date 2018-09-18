import React,{Component} from 'react';
import {Container,Icon,Text,Content,Card,CardItem,Thumbnail,Body,Left,Right,Button } from 'native-base';
import {Image} from 'react-native';
import { StyleSheet,  View } from 'react-native';

class CardComponentTop extends Component{
  render(){
    return (<Card style={styles.card}>
      <CardItem style={styles.cardItem}>
      <Left>
      <Image source={require('../assets/home.png')} style={{height:35,width:35}}></Image>

      <Text style={{color:'white',paddingLeft:60}}>{"Crypto Wallet"}</Text>
  </Left>
  <Right>
  <Image source={require('../assets/more.png')} style={{height:25,width:25}}></Image>
  </Right>

      </CardItem>
    <CardItem style={styles.cardItem}>
    <Left>
    <Text style={{color:'white',fontFamily:'Avenir-Medium'}}>BTC | -2.5% ↓</Text>
    <Text style={{color:'white',fontFamily:'Avenir-Medium'}}>BTC | -2.5% ↓</Text>

    <Body>
    <Text style={{marginLeft:0,color:'white',fontFamily:'Avenir-Medium'}}>ETH | +4.5%  ↑</Text>
    </Body>
</Left>
    </CardItem>

    </Card>

)
  }
}
export default CardComponentTop;

const styles = StyleSheet.create({
  card: {
    height: 100,
      backgroundColor:'#2196F3',
      width: undefined,
      borderWidth:0,
      marginTop: 0,
      marginBottom:0,
      marginLeft: 0,
      marginRight: 0,
      borderColor:'#2196F3'
  },

  cardItem: {
    backgroundColor:'#2196F3',
    borderWidth:0,
    borderColor:'transparent',

  }
});
