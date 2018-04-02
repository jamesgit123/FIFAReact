import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Linking } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { MapView } from 'expo';

export default class MoscowHotel extends Component {


  render() {
    return (
      <View style={styles.container}>

      <Image
      style={{width: 420, height: 400, }}
      source={require('./MoscowHotel.png')}
       />

      <Text style = {styles.titleText}> Hotels in Nizhniy </Text>

      <Text style = {styles.titleText}> Here is a picture link </Text>
      
            <TouchableOpacity onPress = {() => Linking.openURL('http://www.google.com')}>
              <Image
              style={{width: 420, height: 400, }}
              source={require('./MoscowHotel.png')}
              />
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