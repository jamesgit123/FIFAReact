import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';
import { MapView, MapViewDirections } from 'expo';

export default class EkaterinburgStadium extends Component {

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

      <View style = {styles.image}>
      <Image
      style={{width: 420, height: 100, }}
      source={require('./ekaterinburgStadium.png')}
       />
        </View>

      <Text style = {styles.titleText}> You Are Here! </Text>
      <MapView
      style={{ flex: 1, height: 500, width: 300, padding: 50}}
      region={{
        latitude: 56.8389,
        longitude: 60.6057,
        latitudeDelta: 0.0100,
        longitudeDelta: 0.0100,
      }}
    >

    <MapView.Marker
      coordinate = {{
        latitude: 56.8399,
        longitude: 60.6057
      }}
        title = {'San Francisco'}
        description = {'My description'}
    />
    </MapView>


    <Text style = {styles.titleText}> Here is a picture link </Text>
    
          <TouchableOpacity onPress = {() => Linking.openURL('http://www.google.com')}>
            <Image
            style={{width: 420, height: 400, }}
            source={require('./ekaterinburgStadium.png')}
            />
          </TouchableOpacity>
      
      </View>
      </ScrollView>
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