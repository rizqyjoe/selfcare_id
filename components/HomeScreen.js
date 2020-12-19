import * as React from 'react';
import { View,Image, Text,StyleSheet,SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
/*
import ScreenView from '../Screen/ScreenView';
import BreakingNews from './components/BreakingNews';
import TechNews from './components/TechNews';
import FeaturedNews from './components/FeaturedNews';
import SearchBar from '../components/SearchBar';
import data from './components/DataDummy';
*/
import styles from './Styles';
/*function Bambangscreen() {
  return (
    <View>
  <Text>Senaaaaaa</Text>  
    </View>
  );
}
*/


import NewsHomeScreen from '../News/screens/NewsHomeScreen';
import NewsWebviewScreen from '../News/screens/NewsWebviewScreen';
const HomeStack = createStackNavigator();

function HomeStackScreenNews() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={NewsHomeScreen} 
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen 
        name="NewsWebview" 
        component={NewsWebviewScreen}
        options={({ route }) => ({ title: 'News Reader' })}
      />
    </HomeStack.Navigator>
  );
}

const Stack = createStackNavigator();

function HomeScreen() {
  return (
     // <Stack.Navigator initialRouteName="Home">
        //<Stack.Screen name="Home" component={HomeScreen} />
        //<Stack.Screen name="Details" component={DetailsScreen} />
      //</Stack.Navigator>
      <View style={styles.container}> 
      <HomeStackScreenNews/>
      </View>
        
  );
}

export default HomeScreen;
 /*
 detailscreen
 <View style={styles.container}>
      
      <View style={styles.toolbar_home}>
        <Text>Saldo anda</Text>
        <Text style = {styles.text_harga}>Rp10.000.000 </Text>
      </View>
    
    <View style = {styles.container_menu}>  
      <View style={styles.container_button_menu}>
        <Komponent.ButtonMenu name="ios-add" text="TopUp" screenName="TopUP"/>
        <Komponent.ButtonMenu name="ios-qr-scanner" text="Pay" screenName="QrCode"/>
        <Komponent.ButtonMenu name="ios-arrow-round-forward" text="Transfer" screenName="Transfer"/>
      </View> 
    </View>

  </View>
  */