import { theme } from "../core/theme";
import React, { memo } from "react";
import { TouchableOpacity, View, CheckBoxProps, StyleSheet, Image } from 'react-native';
import { BottomNavigation } from "react-native-paper";
//import styles from "./Style";
import TextInput from "../components/TextInput"


const ToDoListHobby = ({ navigation }) => (
<View>
    <View style={styles.display}>
    Wowowow
    </View>
    <View style={styles.txtBox}>
        <TextInput></TextInput>
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
        </TouchableOpacity>
    </View>
    {/* <BottomNavigation/> */}
</View>
);

const styles = StyleSheet.create({
    display:{
        flex:4,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    },
    txtBox:{
        flex:1,
        flexDirection:"row",
    }
  });

  export default memo(ToDoListHobby);