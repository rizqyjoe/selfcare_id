/*
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import SearchBar from './components/SearchBar';
import BlockCard from './components/CardNews';
import FeaturedNews from './components/FeaturedNews';
import SmallCard from './components/SmallCard';
import BreakingNews from './components/BreakingNews';
import TechNews from './components/TechNews';
import Screen from './Screen/ScreenView';
import data from './components/DataDummy';
import { MainStackMenu } from './components/MainStackMenu';
import MainTodo from './components/MainTodo';
import NoteTodoList from './components/NoteTodoList';
import TabNewsScreen from './Screen/TabNewsScreen';



const App = () => {  
   return (
    <NavigationContainer>
    </NavigationContainer> 
   );
}

export default App;
*/
/*<TabNewsScreen/>
<NavigationContainer><MainPayment/>
  </NavigationContainer>
  <LoginScreen/>
      <LoginScreen/>
  
*/
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { MainStackMenu } from './components/MainStackMenu';

// Import navigators
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
/*
// Import screens
import HomeScreen from './News/screens/NewsHomeScreen';
import NewsWebviewScreen from './News/screens/NewsWebviewScreen';

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
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
*//* return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="News/Media"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'News/Media') {
              iconName = focused
                ? 'newspaper'
                : 'newspaper'; 
            } else if (route.name === 'Wordpress') {
              iconName = focused ? 'wordpress' : 'wordpress-simple'
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#156ba3',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="News/Media" component={HomeStackScreen} />
        <Tab.Screen name="Wordpress" component={HomeStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    */
export default function App() {
 return(
   <NavigationContainer>
     <MainStackMenu/>
   </NavigationContainer>
  );
};



/*
import * as React from 'react';
import {Image, View, StyleSheet,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import New from "./components/Newz";
import Newz from './components/Newz';
// You can import from local files

// or any pure javascript modules available in npm
 // Version can be specified in package.json

export default class App extends React.Component {
  state={
    news:[],
  }
  componentDidMount(){
    const API="https://newsapi.org/v2/top-headlines?pageSize=4&country=co&apiKey=60a49976bbd7461fabb075d1d4c35371";
    fetch(API).then(response=>response)
    .then(resp=>resp.json())
    .then(
      resp=> this.setState({news:resp.articles})  )
  }

  
  render() {
    const data= this.state.news.map(new1=>{
    return (
      <Newz
      source={new1.source.name}
      title={new1.title}
      description={new1.description}
      url={new1.urlToImage}
      />
    )})
      
      return(
        <ScrollView>
        {data}
        </ScrollView>
      )
  }
    
    
}

const styles = StyleSheet.create({
 
});

  */