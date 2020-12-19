import React,{useState,useEffect} from 'react'
import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native'
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient'

const Payment = ({navigation}) => {
        
    return (
        <View style = {styles.background}>
            <View style={styles.header}>
            <Image
                    source={require('../assets/strip3.png')}
                    style={{
                        height:10,
                        width:20,
                        marginTop:20,
                        marginLeft:10,
                    }}
               />
                <Text style = {styles.titleKonsultasi}>
                    Konsultasi  
                </Text>
                <Text style = {styles.tulisanMember}>
                    Butuh penangan stress berlebih lebih lanjut?
                    silahkan konsultasi dengan profesional kami

                </Text>
            </View>
            
                <View style ={styles.content}>
                    <View style={{width:"100%"}}>
                        <Text style = {styles.Mpu}>
                            Member Premium Only
                        </Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:204,
                            marginTop:1
                        }}>
                        </View>
                    </View>
                    <View style={styles.containerHot}>
                        <View style = {styles.shapeHot}>
                            <Text style={styles.textHot}>HOT!</Text>
                        </View>
                    </View>
                    
                    <LinearGradient 
                       colors={["rgba(0,164,109,0.09)", "transparent"]}
                       style={{
                           position:"absolute",
                           left:0,
                           right:0,
                           height:100,
                           marginTop:100,
                           top:0}}
                        >
                         <TouchableOpacity style = {styles.touchContainer}
                         onPress={()=>navigation.navigate("Buy")}>
                            <Image 
                            style = {styles.gambarTouch}
                            source={require('../assets/psikolog.jpg')}/>
                                <View style = {styles.tulisanContainerChat}>
                                    <Text style = {styles.tulisanChat}>
                                        Konsultasi Chat 
                                    </Text>
                                    <Text style = {styles.tulisanHarga}>
                                        Rp50.000/Bulan
                                    </Text>
                                </View>
                                    <Text style = {styles.tulisanProfesional}>
                                        Jam kerja 08.00-15.00
                                    </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#4169e1",
        flex:1,
        marginTop:Constants.statusBarHeight
    },
    header:{
        backgroundColor:"#1e90ff",
        height:"28%",
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    content:{
        alignItems:"center",
        flexDirection:"column",
        paddingHorizontal:20,
        flexDirection:"column",
        width:"100%",
    },
    Mpu:{
        marginTop:20,
        fontSize:20,
        color:"#fffb19",
        fontWeight:"bold"   
     },
    titleKonsultasi:{
        fontSize:40,
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
        fontSize:12,
        marginLeft:25,
        color:"white",
        paddingHorizontal:10,
        
    },
    containerHot:{
        width:"100%", 
        alignItems:"flex-end"
    },
    shapeHot:{
        backgroundColor:"red",
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:20,
    },
    textHot:{
        fontWeight:"bold",
        fontSize:15,
        color:"#FFF",
    },
    gambarTouch:{
        width:310,
        height:250,
        borderRadius:15,
    },
    touchContainer:{
        height:320,
        width:310,
        borderRadius:15,
        marginTop:1,
        marginLeft:20,
        backgroundColor:"#FFF"
    },
    tulisanContainerChat:{
        flexDirection:"row",
        paddingTop:10,
        paddingHorizontal:10,
    },
    tulisanChat:{
        fontWeight:"bold"
    },
    tulisanHarga:{
        fontWeight:"bold",
        color:"red",
        paddingLeft:80,
    },
    tulisanProfesional:{
        fontWeight:"bold",
        fontSize:13,
        color:"grey",
        paddingHorizontal:10,
    },

});
export default Payment;
