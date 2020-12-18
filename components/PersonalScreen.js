import * as React from 'react';
import { Text, View,StyleSheet,Image, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

import Komponent from '../layout/Komponent';

const PersonalScreen = () =>{

  return (
    <View style = {styles.container_home} >
      <ImageBackground style = {styles.headerbg} 
      source = {require('../assets/profilebg.jpg')} 
      imageStyle = {{borderBottomLeftRadius:42,
                    borderBottomRightRadius:42}}>
          <Image 
          style = {styles.containerProfile}
          source = {require('../assets/sena.jpg')} />
          <Text style = {styles.textPrimary}>Sena Pahlevi Ristiawanto</Text>
          <Text style = {styles.textPremium}>PREMIUM MEMBER</Text>
      </ImageBackground>
      <View style = {styles.container_menu}>
       <Komponent.ButtonPrimary title = "FAQ" screenName ="FAQ"/>
        <Komponent.ButtonPrimary title = "Konsultasi" screenName ="Konsultasi"/>
        <Komponent.ButtonPrimary title =" Pembayaran" screenName="Payment"/>
        <Komponent.ButtonPrimary title = "Logout" screenName="Login"/>
      </View>
    </View>
  )
}

export default PersonalScreen;