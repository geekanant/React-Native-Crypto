import React,{Component} from 'react';
import {Container,Icon,Text,Content,Card,CardItem,Thumbnail,Body,Left,Right,Button } from 'native-base';
import {Image} from 'react-native';
import { StyleSheet,  View } from 'react-native';


class CardComponentMarket extends Component{
  render(){
    return (<Card style={styles.card}>

            <CardItem style={styles.cardItem}>
        <Text style={{color:'white',fontFamily:'Avenir-Medium'}}>{"Market"}</Text>
        <Image source={require('../assets/more.png')} style={{height:15,width:15,marginLeft:55,marginRight:0}}/>

        </CardItem>

    <CardItem style={styles.cardItem}>
    <Left>
    <Image source={require('../assets/btc.png')} style={{height:25,width:25}}/>
    <Body>
    <Text style={{color:'white',fontFamily:'Avenir-Medium',fontSize:14}}>{"$640  "}
    <Text style={{color:'#2aaf8c',fontFamily:'Avenir-Medium',fontSize:14}}>{"1.4%↑"}</Text></Text>

    </Body></Left>
    </CardItem>
    <CardItem style={styles.cardItem}>


    <Left>
    <Image source={require('../assets/eth.png')} style={{height:25,width:25}}/>

    <Body>
    <Text style={{color:'white',fontFamily:'Avenir-Medium',fontSize:14}}>{"$240  "}
    <Text style={{color:'pink',fontFamily:'Avenir-Medium',fontSize:14}}>{"0.4%↓"}</Text></Text>
    </Body></Left>
    </CardItem>
    <CardItem style={styles.cardItem}>
    <Left>
    <Image source={require('../assets/xrp.png')} style={{height:25,width:25}}/>
    <Body>
    <Text style={{color:'white',fontFamily:'Avenir-Medium',fontSize:14}}>{"$400 "}
    <Text style={{color:'#2aaf8c',fontFamily:'Avenir-Medium',fontSize:14}}>{" 1.4%↑"}</Text></Text>
    </Body></Left>
    </CardItem>
    <CardItem style={styles.cardItem}>
    <Left>
    <Image source={require('../assets/ox.png')} style={{height:25,width:25}}/>

    <Body>
    <Text style={{color:'white',fontFamily:'Avenir-Medium',fontSize:14}}>{"$5   "}
    <Text style={{color:'#2aaf8c',fontFamily:'Avenir-Medium',fontSize:14}}>{" 1.4%↑"}</Text></Text>
    </Body></Left>
    </CardItem>
    </Card>
)
  }
}
export default CardComponentMarket;

const styles = StyleSheet.create({
  card: {
    height: "100%",
      backgroundColor:'#314069',
      width: "100%",
      borderWidth:0,

      borderColor:'transparent',

  },

  cardItem: {
    backgroundColor:'#314069',
    borderWidth:0,
    borderColor:'transparent',
  }
});
