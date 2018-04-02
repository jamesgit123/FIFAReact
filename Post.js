import React,{Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { DrawerNavigator } from "react-navigation";
import navStyle from './navStyles';

export default class Post extends Component {

    static navigationOptions = {
        title: "Home",
        ... navStyle
      };


  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
       
        <Text style = {styles.headerText}>Choose Your City</Text>
        <TouchableOpacity style={styles.buttonMoscow} onPress =  {() => this.props.navigation.navigate("Moscow")} >
          <Text style = {styles.buttonText}> Moscow! </Text>
        </TouchableOpacity>
     
        <View style = {styles.row}>
        <TouchableOpacity  style={styles.button} onPress =  {() => this.props.navigation.navigate("Ekaterinburg")}  >
          <Text style = {styles.buttonText}> Yekaterinburg! </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress =  {() => this.props.navigation.navigate("Sochi")}  >
          <Text style = {styles.buttonText}> Sochi! </Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style={styles.button} onPress =  {() => this.props.navigation.navigate("Kazan")} >
        <Text style = {styles.buttonText}> Kazan! </Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.button} onPress =  {() => this.props.navigation.navigate("Kaliningrad")}  >
        <Text style = {styles.buttonText}> Kaliningrad </Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style={styles.button} onPress =  {() => this.props.navigation.navigate("Samara")}  >
        <Text style = {styles.buttonText}> Samara! </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}  onPress =  {() => this.props.navigation.navigate("Saransk")}  >
        <Text style = {styles.buttonText}> Saransk! </Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style={styles.button} onPress =  {() => this.props.navigation.navigate("RostovOnDon")}  >
        <Text style = {styles.buttonText}> RostovOnDon! </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress =  {() => this.props.navigation.navigate("StPetersburg")}  >
        <Text style = {styles.buttonText}> StPetersburg! </Text>
        </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style={styles.button} onPress =  {() => this.props.navigation.navigate("Volgograd")}  >
        <Text style = {styles.buttonText}> Volgograd! </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress =  {() => this.props.navigation.navigate("Nizhniy")} >
        <Text style = {styles.buttonText}> Nizhniy! </Text>
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
    height: 75,
    width: 50
  },
  buttonMoscow: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'yellow',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    height: 75,
    width: 100
  },
  contentContainer: {
    paddingVertical: 20
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  headerText: {
    color: 'yellow',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 32,
  },
});