import * as React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './HomeScreen';
import PersonalScreen from './PersonalScreen';
import NoteTodoList from './NoteTodoList';
import Gratitude from './Gratitude';
import Timer from './Timer';
const Tab = createMaterialBottomTabNavigator();

function BottomMenu() {
  return(
  
    <Tab.Navigator 
      initialRouteName = "Home"
      activeColor = "#0dd698"
      labelStyle = {{fontSize:12}}
      style = {{backgroundColor:'tomato'}}
      >
    <Tab.Screen 
      name="Home"
      component = {HomeScreen}
      options = {{
        tabBarLabel :'Home',
        tabBarIcon :({color})=> (
          <MaterialCommunityIcons name = "home" color={color} size={26}/>
        ),
      }}
    />
    <Tab.Screen
      name = "Gratitude"
      component = {Gratitude}
      options = {{
        tabBarLabel:'Gratitude',
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name = "history" color = {color} size = {26}/>
        ),
      }}
    />
   
     <Tab.Screen
      name = "DailyList"
      component ={NoteTodoList}
      options={{
        tabBarLabel:'Journal',
        tabBarIcon:({color})=>(
        <MaterialCommunityIcons name="notebook-multiple" size={25} color={color} />    
    ),
      }}
    />
     <Tab.Screen
      name = "Relax"
      component ={Timer}
      options={{
        tabBarLabel:'Relax',
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name="heart-pulse" size={24} color={color} />    
    ),
      }}
    />
   <Tab.Screen
      name = "Personal"
      component ={PersonalScreen}
      options={{
        tabBarLabel:'Account',
        tabBarIcon:({color})=>(
          <MaterialCommunityIcons name ="account" color= {color} size={26}/>
        ),
      }}
    />
    </Tab.Navigator>
  );
}

export default BottomMenu;