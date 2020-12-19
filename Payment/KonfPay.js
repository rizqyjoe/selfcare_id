import * as React from 'react';
import {View,Image,TextInput,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import styles from '../components/Styles';
import Komponent from '../layout/Komponent';
import Constants from 'expo-constants';

const TopUp = () => {
    const navigation = useNavigation();
    return (
        <View style = {gaya.background}>
            <View style={gaya.header}>
            <Text style = {gaya.titleKonsultasi}>
                    Konfirmasi Bayar  
                </Text>
                <Text style = {gaya.tulisanMember}>
                    *Pembayaran hanya via LinkAja/OVO/GoPay
                    
                </Text>
            </View>
            <View style = {gaya.containerContent}>
            <TextInput
                    
                    style = {gaya.textInputPrimary}
                    placeholder = "No HP"/>
                <TextInput
                    
                    style = {gaya.textInputPrimary}
                    placeholder = "Nominal Top Up"/>
           <TouchableOpacity onPress={()=>navigation.navigate("TopUpBerhasil")}>                
                <View style = {gaya.buttonPrimary}>
                <Text style = {{color: 'white', fontSize: 22}}>Submit</Text>
                </View>
            </TouchableOpacity>

            </View>
        </View>
    );
};
/*
const TopUpBerhasil = () =>{
    //const navigation = useNavigation();
    return (
        <View style = {{flex:1}}>
            <View style = {styles.containerImage}>
                <Image
                    source = {require('../assets/garox.jpg')}/>
            </View>
            <View style = {styles.containerContent}>
                <Text style = {styles.textTopUpHeader}>Top Up berhasil</Text>
                <Text style = {styles.textTopUpHeader}>Rp.60.000</Text>
                <View style = {styles.card}>
                    <Text style = {styles.cardText}>TopUpBerhasil</Text>
                        <Text styles = {styles.cardText}>Rp60.000kok</Text>
                
                </View>
                <Komponent.ButtonPrimary title = "Selesai" screenName="Homee"/>
            </View>
        </View>
    );
};
*/
export {TopUp};

const gaya = StyleSheet.create({
    arrowback:{
        marginTop:30,
    },
    background:{
        backgroundColor:"#4169e1",
        flex:1,
        marginTop:Constants.statusBarHeight
    },
    header:{
        backgroundColor:"#1e90ff",
        height:"30%",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    titleKonsultasi:{
        fontSize:35,
        color:"#522289",
        fontWeight:"bold",
        marginTop:10,
        marginLeft:30,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    tulisanMember:{
        width:"59%",
        fontSize:15,
        marginLeft:25,
        color:"#fff",
        paddingHorizontal:10,
    },
    containerContent:{
        marginTop:Constants.statusBarHeight,
        flex:2,
        alignItems:"stretch",
        justifyContent:"flex-start",
    },
    textInputPrimary:{
        marginTop:8,
        marginHorizontal:21,
        paddingLeft: 10,
        height:48,
        borderWidth:1,
        borderRadius:15,
        borderColor:"#C3C3C3",
        backgroundColor: "white",
    },
    buttonPrimary:{
        backgroundColor:"#00a46c",
        marginTop:8,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15,
        height:48,
        marginHorizontal:21        
    },    
    
});