import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
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
      <ScrollView>
      <View style={styles.container}>
      <Text style = {styles.titleText}> You Are Here! </Text>
      <MapView
      style={{ flex: 1, height: 200, width: 300, padding: 50}}
      region={{
        latitude: 55.7558,
        longitude: 37.6173,
        latitudeDelta: 0.0100,
        longitudeDelta: 0.0200,
      }}
    >

    <MapView.Marker
      coordinate = {{
        latitude: 55.7558,
        longitude: 37.6173
      }}
        title = {'San Francisco'}
        description = {'My description'}
    />
    </MapView>


      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MoscowChoose')}>
        <Text style = {styles.buttonText}>  Choose Your stadium! </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MoscowAirport')}>
        <Text style = {styles.buttonText}>  Airport directions </Text>
        </TouchableOpacity>
      </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MoscowParty')}>
        <Text style = {styles.buttonText}>  Find a party! </Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MoscowFood')}>
        <Text style = {styles.buttonText}>  Get some food! </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MoscowHotel')}>
        <Text style = {styles.buttonText}>  Sleep time! Find a HOTEL </Text>
        </TouchableOpacity>
      </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MoscowTransport')}>
        <Text style = {styles.buttonText}>  Transportation </Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Gallery')}>
        <Text style = {styles.buttonText}>  Where is my EMBASSY? </Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Gallery')}>
        <Text style = {styles.buttonText}>  Emergency details </Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Gallery')}>
        <Text style = {styles.buttonText}>  I don't know, need ideas </Text>
        </TouchableOpacity>
        </View>
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