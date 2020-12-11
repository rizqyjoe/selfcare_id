import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreenNews from './News/screens/NewsHomeScreen';
import NewsWebviewScreen from './News/screens/NewsWebviewScreen';
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreenNews} 
        options={{
          headerShown: false
        }}
      />
      <HomeStack.Screen 
        name="NewsWebview" 
        component={NewsWebviewScreen}
        options={({ route }) => ({ title: 'News Health' })}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;