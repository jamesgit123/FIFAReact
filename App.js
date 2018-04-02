import React from 'react';
import { StyleSheet, Text, View, Button,Image,TouchableOpacity, ScrollView, Linking } from 'react-native';
import {StackNavigator} from 'react-navigation';
import navStyle from './navStyles';
import Post from './Post';
import Thing from './Thing';
import Gallery from './Gallery';
import End from './End';
import Transport from './Transport';

import Communication from './Culture/Communication';
import CrazyStuff from './Culture/CrazyStuff';
import Drink from './Culture/Drink';
import EmergencyCulture from './Culture/EmergencyCulture';
import Hospitals from './Culture/Hospitals';
import MeetRussians from './Culture/MeetRussians';
import MustVisit from './Culture/MustVisit';
import NotScammed from './Culture/NotScammed';
import RussianPeople from './Culture/RussianPeople';
import TraditionalActivities from './Culture/TraditionalActivities';
import TraditionalFood from './Culture/TraditionalFood';
import Transportation from './Culture/Transportation';



import EkaterinburgStadium from './Stadiums/EkaterinburgStadium';
import MoscowStadium from './Stadiums/MoscowStadium';
import SamaraStadium from './Stadiums/SamaraStadium';
import SaranskStadium from './Stadiums/SaranskStadium';
import SochiStadium from './Stadiums/SochiStadium';
import VolgogradStadium from './Stadiums/VolgogradStadium';
import StPetersburgStadium from './Stadiums/StPetersburgStadium';
import NizhniyStadium from './Stadiums/NizhniyStadium';
import KaliningradStadium from './Stadiums/KaliningradStadium';
import RostovOnDonStadium from './Stadiums/RostovStadium';
import KazanStadium from './Stadiums/KazanStadium';
import LuzhnikiStadium from './Stadiums/LuzhnikiStadium';
import SpartakStadium from './Stadiums/SpartakStadium';

import Kaliningrad from './Cities/Kaliningrad';
import Sochi from './Cities/Sochi';
import Moscow from './Cities/Moscow';
import MoscowChoose from './Cities/MoscowChoose';
import Nizhniy from './Cities/Nizhniy';
import RostovOnDon from './Cities/RostovOnDon';
import Samara from './Cities/Samara';
import Saransk from './Cities/Saransk';
import StPetersburg from './Cities/StPetersburg';
import Volgograd from './Cities/Volgograd';
import Kazan from './Cities/Kazan';
import Ekaterinburg from './Cities/Ekaterinburg';

import EkaterinburgAirport from './Cities/Ekaterinburg/EkaterinburgAirport';
import EkaterinburgEmbassy from './Cities/Ekaterinburg/EkaterinburgEmbassy';
import EkaterinburgEmergency from './Cities/Ekaterinburg/EkaterinburgEmergency';
import EkaterinburgFood from './Cities/Ekaterinburg/EkaterinburgFood';
import EkaterinburgHotel from './Cities/Ekaterinburg/EkaterinburgHotel';
import EkaterinburgIdeas from './Cities/Ekaterinburg/EkaterinburgIdeas';
import EkaterinburgParty from './Cities/Ekaterinburg/EkaterinburgParty';

import SochiAirport from './Cities/Sochi/SochiAirport';
import SochiEmbassy from './Cities/Sochi/SochiEmbassy';
import SochiEmergency from './Cities/Sochi/SochiEmergency';
import SochiFood from './Cities/Sochi/SochiFood';
import SochiHotel from './Cities/Sochi/SochiHotel';
import SochiIdeas from './Cities/Sochi/SochiIdeas';
import SochiParty from './Cities/Sochi/SochiParty';

import MoscowAirport from './Cities/Moscow/MoscowAirport';
import MoscowEmbassy from './Cities/Moscow/MoscowEmbassy';
import MoscowEmergency from './Cities/Moscow/MoscowEmergency';
import MoscowFood from './Cities/Moscow/MoscowFood';
import MoscowHotel from './Cities/Moscow/MoscowHotel';
import MoscowIdeas from './Cities/Moscow/MoscowIdeas';
import MoscowParty from './Cities/Moscow/MoscowParty';

import NizhniyAirport from './Cities/Nizhniy/NizhniyAirport';
import NizhniyEmbassy from './Cities/Nizhniy/NizhniyEmbassy';
import NizhniyEmergency from './Cities/Nizhniy/NizhniyEmergency';
import NizhniyFood from './Cities/Nizhniy/NizhniyFood';
import NizhniyHotel from './Cities/Nizhniy/NizhniyHotel';
import NizhniyIdeas from './Cities/Nizhniy/NizhniyIdeas';
import NizhniyParty from './Cities/Nizhniy/NizhniyParty';

import SamaraAirport from './Cities/Samara/SamaraAirport';
import SamaraEmbassy from './Cities/Samara/SamaraEmbassy';
import SamaraEmergency from './Cities/Samara/SamaraEmergency';
import SamaraFood from './Cities/Samara/SamaraFood';
import SamaraHotel from './Cities/Samara/SamaraHotel';
import SamaraIdeas from './Cities/Samara/SamaraIdeas';
import SamaraParty from './Cities/Samara/SamaraParty';

import SaranskAirport from './Cities/Saransk/SaranskAirport';
import SaranskEmbassy from './Cities/Saransk/SaranskEmbassy';
import SaranskEmergency from './Cities/Saransk/SaranskEmergency';
import SaranskFood from './Cities/Saransk/SaranskFood';
import SaranskHotel from './Cities/Saransk/SaranskHotel';
import SaranskIdeas from './Cities/Saransk/SaranskIdeas';
import SaranskParty from './Cities/Saransk/SaranskParty';

import KaliningradAirport from './Cities/Kaliningrad/KaliningradAirport';
import KaliningradEmbassy from './Cities/Kaliningrad/KaliningradEmbassy';
import KaliningradEmergency from './Cities/Kaliningrad/KaliningradEmergency';
import KaliningradFood from './Cities/Kaliningrad/KaliningradFood';
import KaliningradHotel from './Cities/Kaliningrad/KaliningradHotel';
import KaliningradIdeas from './Cities/Kaliningrad/KaliningradIdeas';
import KaliningradParty from './Cities/Kaliningrad/KaliningradParty';

import RostovOnDonAirport from './Cities/RostovOnDon/RostovOnDonAirport';
import RostovOnDonEmbassy from './Cities/RostovOnDon/RostovOnDonEmbassy';
import RostovOnDonEmergency from './Cities/RostovOnDon/RostovOnDonEmergency';
import RostovOnDonFood from './Cities/RostovOnDon/RostovOnDonFood';
import RostovOnDonHotel from './Cities/RostovOnDon/RostovOnDonHotel';
import RostovOnDonIdeas from './Cities/RostovOnDon/RostovOnDonIdeas';
import RostovOnDonParty from './Cities/RostovOnDon/RostovOnDonParty';

import KazanAirport from './Cities/Kazan/KazanAirport';
import KazanEmbassy from './Cities/Kazan/KazanEmbassy';
import KazanEmergency from './Cities/Kazan/KazanEmergency';
import KazanFood from './Cities/Kazan/KazanFood';
import KazanHotel from './Cities/Kazan/KazanHotel';
import KazanIdeas from './Cities/Kazan/KazanIdeas';
import KazanParty from './Cities/Kazan/KazanParty';

import StPetersburgAirport from './Cities/StPetersburg/StPetersburgAirport';
import StPetersburgEmbassy from './Cities/StPetersburg/StPetersburgEmbassy';
import StPetersburgEmergency from './Cities/StPetersburg/StPetersburgEmergency';
import StPetersburgFood from './Cities/StPetersburg/StPetersburgFood';
import StPetersburgHotel from './Cities/StPetersburg/StPetersburgHotel';
import StPetersburgIdeas from './Cities/StPetersburg/StPetersburgIdeas';
import StPetersburgParty from './Cities/StPetersburg/StPetersburgParty';

import VolgogradAirport from './Cities/Volgograd/VolgogradAirport';
import VolgogradEmbassy from './Cities/Volgograd/VolgogradEmbassy';
import VolgogradEmergency from './Cities/Volgograd/VolgogradEmergency';
import VolgogradFood from './Cities/Volgograd/VolgogradFood';
import VolgogradHotel from './Cities/Volgograd/VolgogradHotel';
import VolgogradIdeas from './Cities/Volgograd/VolgogradIdeas';
import VolgogradParty from './Cities/Volgograd/VolgogradParty';

class App extends React.Component {

  static navigationOptions = {
    title: "Home",
    ... navStyle
  };


  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <View style = {styles.image}>
        <Image
        style={{width: 420, height: 400, }}
        source={require('./picture_home_page/home_picture.png')}
         />
      </View>
      <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Post')}>
        <Text style = {styles.buttonText}>  Explore City! </Text>
        </TouchableOpacity>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Thing')}>
        <Text style = {styles.buttonText}>  Culture Guide! </Text>
        </TouchableOpacity>
        </View>
        <View style = {styles.row}>
        <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Gallery')}>
        <Text style = {styles.buttonText}>  Feedback! </Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
}

export default StackNavigator({
  Home: {
    screen: App
  },

  Post: {
    screen: Post
  },

  Thing: {
    screen: Thing
  },

  Gallery: {
    screen: Gallery
  },

  End: {
    screen: End
  },
  
  Transport: {
    screen: Transport
  },

  Ekaterinburg: {
    screen: Ekaterinburg
  },

  EkaterinburgAirport: {
    screen: EkaterinburgAirport
  },

  EkaterinburgEmbassy: {
    screen: EkaterinburgAirport
  },

  EkaterinburgEmergency: {
    screen: EkaterinburgEmergency
  },

  EkaterinburgFood: {
    screen: EkaterinburgFood
  },

  EkaterinburgHotel: {
    screen: EkaterinburgHotel
  },

  EkaterinburgIdeas: {
    screen: EkaterinburgIdeas
  },

  EkaterinburgParty: {
    screen: EkaterinburgParty
  },

  EkaterinburgStadium: {
    screen: EkaterinburgStadium
  },

  Kaliningrad: {
    screen: Kaliningrad
  },

  KaliningradAirport: {
    screen: KaliningradAirport
  },

  KaliningradEmbassy: {
    screen: KaliningradAirport
  },

  KaliningradEmergency: {
    screen: KaliningradEmergency
  },

  KaliningradFood: {
    screen: KaliningradFood
  },

  KaliningradHotel: {
    screen: KaliningradHotel
  },

  KaliningradIdeas: {
    screen: KaliningradIdeas
  },

  KaliningradParty: {
    screen: KaliningradParty
  },

  KaliningradStadium: {
    screen: KaliningradStadium
  },

  Kazan: {
    screen: Kazan
  },

  KazanAirport: {
    screen: KazanAirport
  },

  KazanEmbassy: {
    screen: KazanAirport
  },

  KazanEmergency: {
    screen: KazanEmergency
  },

  KazanFood: {
    screen: KazanFood
  },

  KazanHotel: {
    screen: KazanHotel
  },

  KazanIdeas: {
    screen: KazanIdeas
  },

  KazanParty: {
    screen: KazanParty
  },

  KazanStadium: {
    screen: KazanStadium
  },


  Sochi: {
    screen: Sochi
  },

  SochiAirport: {
    screen: SochiAirport
  },

  SochiEmbassy: {
    screen: SochiAirport
  },

  SochiEmergency: {
    screen: SochiEmergency
  },

  SochiFood: {
    screen: SochiFood
  },

  SochiHotel: {
    screen: SochiHotel
  },

  SochiIdeas: {
    screen: SochiIdeas
  },

  SochiParty: {
    screen: SochiParty
  },

  SochiStadium: {
    screen: SochiStadium
  },

  Moscow: {
    screen: Moscow
  },

  MoscowAirport: {
    screen: MoscowAirport
  },

  MoscowEmbassy: {
    screen: MoscowAirport
  },

  MoscowEmergency: {
    screen: MoscowEmergency
  },

  MoscowFood: {
    screen: MoscowFood
  },

  MoscowHotel: {
    screen: MoscowHotel
  },

  MoscowIdeas: {
    screen: MoscowIdeas
  },

  MoscowParty: {
    screen: MoscowParty
  },

  MoscowStadium: {
    screen: MoscowStadium
  },

  MoscowChoose: {
    screen: MoscowChoose
  },



  Nizhniy: {
    screen: Nizhniy
  },

  NizhniyAirport: {
    screen: NizhniyAirport
  },

  NizhniyEmbassy: {
    screen: NizhniyAirport
  },

  NizhniyEmergency: {
    screen: NizhniyEmergency
  },

  NizhniyFood: {
    screen: NizhniyFood
  },

  NizhniyHotel: {
    screen: NizhniyHotel
  },

  NizhniyIdeas: {
    screen: NizhniyIdeas
  },

  NizhniyParty: {
    screen: NizhniyParty
  },

  NizhniyStadium: {
    screen: NizhniyStadium
  },


  RostovOnDon: {
    screen: RostovOnDon
  },

  RostovOnDonAirport: {
    screen: RostovOnDonAirport
  },

  RostovOnDonEmbassy: {
    screen: RostovOnDonAirport
  },

  RostovOnDonEmergency: {
    screen: RostovOnDonEmergency
  },

  RostovOnDonFood: {
    screen: RostovOnDonFood
  },

  RostovOnDonHotel: {
    screen: RostovOnDonHotel
  },

  RostovOnDonIdeas: {
    screen: RostovOnDonIdeas
  },

  RostovOnDonParty: {
    screen: RostovOnDonParty
  },

  RostovOnDonStadium: {
    screen: RostovOnDonStadium
  },

  Samara: {
    screen: Samara
  },

  SamaraAirport: {
    screen: SamaraAirport
  },

  SamaraEmbassy: {
    screen: SamaraAirport
  },

  SamaraEmergency: {
    screen: SamaraEmergency
  },

  SamaraFood: {
    screen: SamaraFood
  },

  SamaraHotel: {
    screen: SamaraHotel
  },

  SamaraIdeas: {
    screen: SamaraIdeas
  },

  SamaraParty: {
    screen: SamaraParty
  },

  SamaraStadium: {
    screen: SamaraStadium
  },

  Saransk: {
    screen: Saransk
  },

  SaranskAirport: {
    screen: SaranskAirport
  },

  SaranskEmbassy: {
    screen: SaranskAirport
  },

  SaranskEmergency: {
    screen: SaranskEmergency
  },

  SaranskFood: {
    screen: SaranskFood
  },

  SaranskHotel: {
    screen: SaranskHotel
  },

  SaranskIdeas: {
    screen: SaranskIdeas
  },

  SaranskParty: {
    screen: SaranskParty
  },

  SaranskStadium: {
    screen: SaranskStadium
  },


  StPetersburg: {
    screen: StPetersburg
  },

  StPetersburgAirport: {
    screen: StPetersburgAirport
  },

  StPetersburgEmbassy: {
    screen: StPetersburgAirport
  },

  StPetersburgEmergency: {
    screen: StPetersburgEmergency
  },

  StPetersburgFood: {
    screen: StPetersburgFood
  },

  StPetersburgHotel: {
    screen: StPetersburgHotel
  },

  StPetersburgIdeas: {
    screen: StPetersburgIdeas
  },

  StPetersburgParty: {
    screen: StPetersburgParty
  },

  StPetersburgStadium: {
    screen: StPetersburgStadium
  },

  Volgograd: {
    screen: Volgograd
  },

  VolgogradAirport: {
    screen: VolgogradAirport
  },

  VolgogradEmbassy: {
    screen: VolgogradAirport
  },

  VolgogradEmergency: {
    screen: VolgogradEmergency
  },

  VolgogradFood: {
    screen: VolgogradFood
  },

  VolgogradHotel: {
    screen: VolgogradHotel
  },

  VolgogradIdeas: {
    screen: VolgogradIdeas
  },

  VolgogradParty: {
    screen: VolgogradParty
  },

  VolgogradStadium: {
    screen: VolgogradStadium
  },

  LuzhnikiStadium: {
    screen: LuzhnikiStadium
  },

  SpartakStadium: {
    screen: SpartakStadium
  },

  Communication: {
    screen: Communication
  },

  CrazyStuff: {
    screen: CrazyStuff
  },

  Drink: {
    screen: Drink
  },

  EmergencyCulture: {
    screen: EmergencyCulture
  },

  Hospitals: {
    screen: Hospitals
  },

  MeetRussians: {
    screen: MeetRussians
  },

  MustVisit: {
    screen: MustVisit
  },

  NotScammed: {
    screen: NotScammed
  },

  RussianPeople: {
    screen: RussianPeople
  },

  TraditionalActivities: {
    screen: TraditionalActivities
  },

  TraditionalFood: {
    screen: TraditionalFood
  },

  Transportation: {
    screen: Transportation
  },
});

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
    height: 75,
    width: 60,
  },
  buttonText: {
    fontSize: 14,
  },
  image: {
    paddingTop: 10,
  },
});
