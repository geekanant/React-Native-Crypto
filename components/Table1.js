import React, { Component } from 'react';
import { StyleSheet, View ,Text,Image} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {Container,Icon,Content,Card,CardItem,Thumbnail,Body,Left,Right,Badge } from 'native-base';
class Table1 extends Component {

  render() {
    return (
      <Card style={{position:'relative'}}>
      <View>
      <Text style={{marginLeft:20,marginRight:20}}>{"Profile              Price              Quantity              Action\n\n"}</Text>
      </View>
      <CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
      <View>

      <Image source={require('../assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
    <Image source={require('../assets/star.png')} style={{height:15,width:15,marginRight:30,marginLeft:20,marginTop:5}}></Image>
      </View>
      <Text>           $12                      2                    BUY</Text>

</CardItem>
<CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
<View>

<Image source={require('../assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
<Image source={require('../assets/star.png')} style={{height:15,width:15,marginRight:30,marginLeft:20,marginTop:5}}></Image>
</View>
<Text>           $12                      2                    BUY</Text>

</CardItem>
<CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
<View>

<Image source={require('../assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
<Image source={require('../assets/star.png')} style={{height:15,width:15,marginRight:30,marginLeft:20,marginTop:5}}></Image>
</View>
<Text>           $12                      2                    BUY</Text>

</CardItem>
<CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
<View>

<Image source={require('../assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
<Image source={require('../assets/star.png')} style={{height:15,width:15,marginRight:30,marginLeft:20,marginTop:5}}></Image>
</View>
<Text>           $12                      2                    BUY</Text>

</CardItem>
<CardItem style={{height:55,marginTop:0,marginLeft:0,marginBottom:0,paddingLeft:0,paddingTop:0}}>
<View>

<Image source={require('../assets/prof_icon.png')} style={{height:25,width:25,marginRight:30,marginLeft:20,marginTop:20}}/>
<Image source={require('../assets/star.png')} style={{height:15,width:15,marginRight:30,marginLeft:20,marginTop:5}}></Image>
</View>
<Text>           $12                      2                    BUY</Text>

</CardItem>
</Card>

    )
  }
}
export default Table1;
