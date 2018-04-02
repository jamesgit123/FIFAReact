import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';

export default class Transport extends Component {

    static navigationOptions = {
        title: "Home",
        ... navStyle
      };

  render() {
    return (
      <View style={styles.container}>


      <Text style = {styles.titleText}>
      Transportation to the City Center - making the right choice!
      You have a number of options - taxi/transfer, Aeroexpress (dedicated, non-stop trains)
       - then either taxi or Metro, or most challenging and only for the brave, bus + Metro. 
       The first will cost you more (unless there are 3-4 of you!), the second involves more hassle, 
       the third should only be tried by experienced travellers, 
       ideally with Russian language skills. Take into consideration  the following:

       <View style = {styles.row}>
       <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('BusOption')}>
       <Text style = {styles.buttonText}>  More Transport Options </Text>
       </TouchableOpacity>
     </View>
      </Text>
     

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 14,
    color: 'yellow',
    textAlign: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    margin: 15,
    height: 35,
    width: 30,
  },
  buttonText: {
    fontSize: 18,
  },
  image: {
    paddingTop: 10,
  },
});