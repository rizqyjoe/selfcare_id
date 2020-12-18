import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'

import Constants from 'expo-constants';
const KonfChat = ({navigation}) => {
    return (
        <View style ={styles.containerBackground}>
           <View style={styles.containerPosisi}>
            
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image
                        source={require('../assets/backarrow.png')}
                        style = {styles.arrowback}
                        />
                </TouchableOpacity>
                
                <View style = {styles.touchContainerGambar}>
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
                                    <Text style ={styles.description}>
                                        Deskripsi:

                                    </Text>
                                    <Text style ={styles.isiDeskripsi}>
                                        Konsultasi sepuasnya dengan 
                                        psikolog dan psikiater terbaik dari tim kami.Memiliki
                                        izin dari IPKI.
                                    </Text>
                        </View>
                        
            </View>

                        <TouchableOpacity style={styles.containerMode}>
                            <View style = {styles.shapeBuy}>
                                <Text style={styles.textBuy}>Buy</Text>
                            </View>
                        </TouchableOpacity>
        
        </View>
        
            
    )
}

export default KonfChat;

const styles = StyleSheet.create({
    containerBackground:{
        backgroundColor:"#4169e1",
        flex:1,
        marginTop:Constants.statusBarHeight
    },
    containerPosisi:{
        flexDirection:"row",
        width:"100%",
        height:"90%"
    },
    arrowback:{
        marginVertical:15,
    },
    touchContainerGambar:{
        height:400,
        width:300,
        borderRadius:15,
        marginTop:20,
        marginLeft:20,
        backgroundColor:"#FFF"
    },
    gambarTouch:{
        width:300,
        height:250,
        borderRadius:15,
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
    description:{
        marginTop:10,
        fontWeight:"bold",
        fontSize:15,
        color:"black",
        paddingHorizontal:10,

    },
    isiDeskripsi:{
        paddingHorizontal:10,
        fontSize:13,
    },
    containerMode:{
        flexDirection:"column",
        width:"100%",
        marginLeft:100,

    },
    shapeBuy:{
        width:"50%",
        backgroundColor:"#00a46c",
        height:70,
        marginTop:20,
        borderRadius:15,
        alignItems:"center",
        marginBottom:10,
    },
    textBuy:{
        color:"#FFF",
        fontSize:20,
        fontWeight:"bold"
    },
    metodePay:{
        
    },

    
})
