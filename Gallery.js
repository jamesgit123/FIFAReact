import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, Alert, Linking } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';
import * as OpenAnything from 'react-native-openanything';
import Communications from 'react-native-communications';

export default class Gallery extends Component {

  constructor(props) {
    super(props);
    
      this.state = {
        name: '',
        email: '',
        like: '',
        dislike: ''
      };
  
  }

  handle = () => {

  }


    static navigationOptions = {
        title: "Home",
        ... navStyle
      };


    
  render() {

    return (
      <ScrollView>
      <View style={styles.container}>


        <Text style = {styles.writing}>Share your thoughts!</Text>
        <Text style = {styles.writing}>Please leave your feedback</Text>

        <View style = {styles.row}>
     <TouchableOpacity style = {styles.button} onPress = {() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdL6w-FZnB1z64LVDCFKNlay727rxtLnYzsOMxwZPDd1jjO9g/viewform')}>
            <Text style = {styles.buttonText}>  Submit Feedback </Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress={() => Communications.email(['durianlone@gmail.com', 'evlizashel@gmail.com'],null,null,'Feedback','')}>
          <Text style={styles.buttonText}>Send an email</Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  holder: {
    flex: 0.25,
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
  writing: {
    color: 'black',
    fontSize: 32,
    alignItems: 'center',
  },
  writing2: {
    color: 'black',
    fontSize: 16,
    paddingTop: 40,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    margin: 15,
    height: 50,
    width: 50,
  },
  buttonText: {
    fontSize: 18,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
 
});