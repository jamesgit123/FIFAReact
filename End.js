import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';

export default class End extends Component {

  constructor(props) {
    super(props);
    
      this.state = {text: ''};
  
  }

    static navigationOptions = {
        title: "Home",
        ... navStyle
      };

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.writing}>Thank you for your thoughts!</Text>
        <Text style = {styles.writing2}>All feedback to evlizashel@gmail.com!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  writing: {
    color: 'black',
    fontSize: 20,
  },
  writing2: {
    color: 'black',
    fontSize: 16,
    paddingTop: 50,

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
    padding: 60,
  },
});