import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';
import { MapView } from 'expo';

export default class MoscowTrain extends Component {

    static navigationOptions = {
        title: "Home",
        ... navStyle
      };

  render() {
    return (
      <View style={styles.container}>
      

    <Text style = {styles.titleText}> Trains </Text>
    <Text style = {styles.titleText}>Public transport is pretty cheap in Moscow, and you can get around by metro (subway), bus, tram, taxi...The most popular and convenient method of travel is the metro.  Tickets are very cheap and are purchased at the metro stations, at the window labeled with the word "KACCA".  You can buy tickets for various numbers of journeys - from 1 to 60 journeys. </Text>
    <Text style = {styles.titleText}>City Pub Crawl Moscow http://www.citypubcrawl.ru/en Pokrovka St, 17, Moscow 115573, Russia </Text>
    <Text style = {styles.titleText}>VLounge http://vlounge.ru/ Znamenka St., 13/4, Moscow 119019, Russia </Text>
    <Text style = {styles.titleText}> Sixteen Tons Club https://www.16tons.ru/ Presnensky val 6b1 | Metro Ulitsa 1905 goda, Moscow </Text>


    
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