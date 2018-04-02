import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';

export default class Thing extends Component {

    static navigationOptions = {
        title: "Home",
        ... navStyle
      };

  render() {
    return (

      <ScrollView>
      <View style={styles.container}>


      <Text style = {styles.titleText}> We are here to help you to have fun 
      </Text>
      <Text style = {styles.titleText}> Choose a category </Text>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Communication')}>
        <Text style = {styles.buttonText}> Communication rules </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('NotScammed')}>
        <Text style = {styles.buttonText}>  How not to be scammed </Text>
        </TouchableOpacity>
      </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('RussianPeople')}>
        <Text style = {styles.buttonText}>  About Russian people </Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('TraditionalFood')}>
        <Text style = {styles.buttonText}>  Traditional food </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Drink')}>
        <Text style = {styles.buttonText}>  How to drink </Text>
        </TouchableOpacity>
      </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Transportation')}>
        <Text style = {styles.buttonText}>  Transportation </Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MeetRussians')}>
        <Text style = {styles.buttonText}> Meet Russian people </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('TraditionalActivities')}>
        <Text style = {styles.buttonText}> Traditional activities </Text>
        </TouchableOpacity>
      </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('MustVisit')}>
        <Text style = {styles.buttonText}>  Must visit in Russia </Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('EmergencyCulture')}>
        <Text style = {styles.buttonText}>  Emergency </Text>
        </TouchableOpacity>
      </View>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Hospitals')}>
        <Text style = {styles.buttonText}> Hospitals and Pharmacies </Text>
        </TouchableOpacity>
      </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('CrazyStuff')}>
        <Text style = {styles.buttonText}> Some Crazy Stuff </Text>
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