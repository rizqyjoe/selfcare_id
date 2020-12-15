import React, { memo } from "react";
import {Image} from "react-native";
import Background from "../components/Background";
import Logo from "../components/Logo";
import LoginMethod from "../components/OtherLoginMethod";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Footer from "../components/Footer";
//import txtBold from "../components/TextBold";

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Welcome to SelfCare</Header>

    <Paragraph>
      You are precious, login to care yourself.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate("LoginScreen")}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate("RegisterScreen")}
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


export default memo(HomeScreen);
