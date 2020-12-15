import React, { memo } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { logoutUser } from "../api/auth-api";
import ToDoListHobby from "./ToDoListHobby"
import { TouchableOpacity, View, CheckBoxProps, StyleSheet, Image } from 'react-native';
import {theme} from "../core/theme"
import TextInput from "../components/TextInput"
//import TodoScreen from "./todoscreen"
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
//import WelcomeScreen from './screens/welcome.screen';
//import todoscreen from "./todoscreen"
//const Stack = createStackNavigator();

// export default function App() {
//   return (
//   <NavigationContainer>
//       <Stack.Screen name='Todo' component={todoscreen} options={screenOptions.Todo}/>
//   </NavigationContainer>
//   );
// }
//import ToDoList from "../screens/List"
//import TaskList from "./TaskList";

//yang dihapus : Create Stack Navigator, todoscreen

const Dashboard = () => (
  <Background>
    <View style={styles.txtBox}>
    <Button mode="outlined" onPress={() => logoutUser()}>
        Logout
    </Button>,
    {/* <Native.Screen name='Todo' component={todoscreen} options={screenOptions.Todo}/> */}
    {/* <TextInput></TextInput>
    <TouchableOpacity
    style={{
        borderWidth:3,
        borderColor:theme.colors.primary,
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        backgroundColor:'#fff',
        borderRadius:25,
        justifyContent:"center",
        marginLeft:10,
        }}
    >
    </TouchableOpacity> */}
    {/* <Button mode="outlined" onPress={() => ToDoList()}>
        Make a List
    </Button> */}
    {/* todoscreen();
    <TodoScreen/> */}
  </View>
  </Background>
  
// /* <BottomNavigation/> */
//   <Background>
//     <Logo />
//     <ToDoListHobby/>

//     <Button mode="outlined" onPress={() => logoutUser()}>
//       Logout
//     </Button>
//   </Background>
);

const styles = StyleSheet.create({
  display:{
      flex:1,
      width:"100%",
      height:200,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
  },
  txtBox:{
      flex:1,
      flexDirection:"row",
      width:"90%"
  }
});

export default memo(Dashboard);
