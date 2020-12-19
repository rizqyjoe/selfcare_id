import React, { memo } from "react";
import {Image} from "react-native";
import Background from "../reusable/Background";
import Logo from "../reusable/Logo";
import LoginMethod from "../reusable/OtherLoginMethod";
import Header from "../reusable/Header";
import Button from "../reusable/Button";
import Paragraph from "../reusable/Paragraph";
import Footer from "../reusable/Footer";
import { useNavigation } from '@react-navigation/native';
import {theme} from '../reusable/theme'
//import txtBold from "../components/TextBold";

function index({navigation}){
    return(
    <Background>
      <Logo />
      <Header>Welcome to SelfCare</Header>
  
      <Paragraph>
        You are precious, login to care yourself.
      </Paragraph>
      <Button 
      mode="contained" 
      style={{ color:theme.colors.blue}}
      onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Button 
      mode="outlined"
      onPress={() => navigation.navigate('Register')}
      >
        Sign Up
      </Button>
      <Paragraph>
        -      Or Sign Up with     -
      </Paragraph>
      <LoginMethod />
      <Footer/>
    </Background>
    );
}



export default index;
