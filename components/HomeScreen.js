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

const HomeNewsDum = () => {  
 /* const breakingNews = data.filter(item => item.category === 'breaking-news');
 // const techNews = data.filter(item =>item.category === 'tech');
 <ScreenView>
         <SearchBar/>
        <FeaturedNews 
        item={{
              id: '7',
              title: 'This is the title no seven.',
              desc:
                'Desc is the short form of description and this format is the actual same as our real database.',
              thumbnail: 'http://lorempixel.com/400/200/',
        }}/>
        <BreakingNews />
        <TechNews />
     </ScreenView>
     */
  return (
     <View>
     <Text>NEWS</Text>
</View>
  );
}

const Stack = createStackNavigator();

function HomeScreen() {
  return (
     // <Stack.Navigator initialRouteName="Home">
        //<Stack.Screen name="Home" component={HomeScreen} />
        //<Stack.Screen name="Details" component={DetailsScreen} />
      //</Stack.Navigator>
      //<View style={styles.container}> </View>
        <Text>text</Text>
     
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