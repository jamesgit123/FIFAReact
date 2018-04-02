import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';
import { MapView } from 'expo';

export default class MoscowBus extends Component {

    static navigationOptions = {
        title: "Home",
        ... navStyle
      };

  render() {
    return (
      <View style={styles.container}>
      

    <Text style = {styles.titleText}> Buses </Text>
    <Text style = {styles.titleText}>Other methods of transport include trams and buses.  While you can normally buy tickets for these in advance, at metro stations where as above you can use the same, unified "Troika" store value card, and kiosks adjacent to (some by an ever decreasing number of) bus stops and ask for 'avtoboos beelyet'  and they can be bought from the driver for a couple of roubles more. There is a powerful tool to plan your route via public transport. It situates at  yandex.maps The interface is in Russian only but it's very simple. </Text>
    


    
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Post')}>
        <Text style = {styles.buttonText}>  Get some food! </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 18,
    color: 'yellow',
    textAlign: 'center',
    padding: 20,
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
    height: 50,
    width: 50,
  },
  buttonText: {
    fontSize: 18,
  },
  image: {
    paddingTop: 10,
  },
});