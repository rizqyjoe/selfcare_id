import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from './LoginScreen';
import HomeScreen from '../components/HomeScreen';
import PersonalScreen from './PersonalScreen';
import RegisterScreen from './RegisterScreen';
import BottomMenu from './BottomMenu';
import  {Transfer,TransferBerhasil} from './TransferScreen';
import ChatScreen from "../Screen/ChatScreen";
import Constants from 'expo-constants';
import Payment from "../Payment/Payment";
import KonfChat from "../Payment/KonfChat";
import FAQ from "../FAQ/FAQ";

const Stack = createStackNavigator();
 /*<Stack.Screen
              name ="QRPay"
              component = {QrCode}
              /> 
              */
const MainStackMenu = () =>{
    return(
    <Stack.Navigator screenOptions = {{headerShown:false }}>
            <Stack.Screen
            name = "Login"
            component = {LoginScreen}
            options={{title:null}}
            /> 
            <Stack.Screen
              name ="Homee"
              component = {BottomMenu}
              options={{
                title:null,           
              }}
              />

            <Stack.Screen
              name ="Register"
              component = {RegisterScreen}
              /> 
          
           <Stack.Screen
              name ="News"
              component = {HomeScreen}
              /> 
             <Stack.Screen
              name ="Transfer"
              component = {Transfer}
              />
              <Stack.Screen
            name = "Payment"
            component = {Payment}
            options={{title:null}}
            /> 
            
            <Stack.Screen
            name = "KonfChat"
            component = {KonfChat}
            options={{title:null}}
            /> 

              <Stack.Screen
            name = "Konsultasi"
            component = {ChatScreen}
            options={{title:null}}
            /> 

            <Stack.Screen
            name = "FAQ"
            component = {FAQ}
            options={{title:null}}
            /> 
             
    </Stack.Navigator>
    );
};
export {MainStackMenu};