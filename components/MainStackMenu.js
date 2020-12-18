import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from './LoginScreen';
import HomeScreen from '../components/HomeScreen';
import PersonalScreen from './PersonalScreen';
import RegisterScreen from './RegisterScreen';
import BottomMenu from './BottomMenu';
import ChatScreen from "../Screen/ChatScreen";
import Constants from 'expo-constants';
import Payment from "../Payment/Payment";
import Buy from "../Payment/Buy";
import Psikologis from '../Screen/Psikologis';
import ChatScreen2 from '../Screen/ChatScreen2';
import { TopUp,TopUpBerhasil } from "../Payment/KonfPay";
import SuksesPayment from "../Payment/SuksesPayment";
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
              name ="TopUp"
              component = {TopUp}
              />
               <Stack.Screen
              name ="TopUpBerhasil"
              component = {SuksesPayment}
              />
           
              <Stack.Screen
            name = "Payment"
            component = {Payment}
            options={{title:null}}
            /> 
            
            <Stack.Screen
            name = "Buy"
            component = {Buy}
            options={{title:null}}
            /> 
               <Stack.Screen
            name = "Chat1"
            component = {ChatScreen}
            options={{title:null}}
            /> 

                <Stack.Screen
            name = "Chat2"
            component = {ChatScreen2}
            options={{title:null}}
            /> 
              <Stack.Screen
            name = "Konsultasi"
            component = {Psikologis}
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