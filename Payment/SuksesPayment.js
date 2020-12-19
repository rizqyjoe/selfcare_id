import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const SuksesPayment = () => {
    const navigation = useNavigation();
    return (
        <View style = {styles.background}>
           <Image
          style={styles.gambar}
          source={require('../assets/paymentsuksesblue.gif')} />
        <TouchableOpacity
            style = {styles.touchContainer}
             onPress={()=>navigation.navigate("Konsultasi")}>
            <Text style={styles.textOk}>OK</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuksesPayment;

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#4169e1",
        flex:1,
        marginTop:Constants.statusBarHeight         
    },
    gambar:{
        width: 350, 
        alignItems:"center",
        alignContent:"center",
        height: 400
    },
    touchContainer:{
        height:40,
        width:160,
        borderRadius:15,
        marginTop:1,
        marginLeft:100,
        backgroundColor:"#00a46c"
    },
    textOk:{
        alignItems:"center",
        justifyContent:"center",
        marginLeft:60,
        fontSize:25,
        fontWeight:"bold",
        color:"#000"
    }
})
