import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';
import { MapView } from 'expo';

export default class Moscow extends Component {

    static navigationOptions = {
        title: "Home",
        ... navStyle
      };

  render() {
    return (
      <View style={styles.container}>
  
   
    <Text style = {styles.buttonText}>  Choose Your Vehicle! </Text>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MoscowTrain')}>
        <Text style = {styles.buttonText}>  Train </Text>
        </TouchableOpacity>
      </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MoscowBus')}>
        <Text style = {styles.buttonText}>  Bus </Text>
        </TouchableOpacity>
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
    fontSize: 28,
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