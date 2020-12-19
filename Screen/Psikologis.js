import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import Constants from 'expo-constants';

const Psikologis = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={()=>navigation.navigate("Personal")}>
                    <Image
                        source={require('../assets/backarrow.png')}
                        style = {styles.arrowback}
                        />
                </TouchableOpacity>
                <Text style = {styles.titleKonsultasi}>
                            Konsultasi 
                </Text>
                <Text style = {styles.tulisanMember}>
                        Kami memiliki tenaga profesional siap 
                            berkonsultasi menggunakan chat secara online
                </Text>
                
            </View>
            <TouchableOpacity style = {styles.shapeIsi}
            onPress={()=>navigation.navigate("Chat1")}
            >
                <Image 
                    source={require('../assets/avatar2.png')}
                    style={{
                        width:120,
                        height:125,
                        borderRadius:15
                    }}
                />
                <View style ={styles.containerTulisan}>
                    <Text style={styles.txtStyle}>
                    Drs. Alex Luthor, S.Psi.
                    </Text>
                    <Text>
                        Expert Psychologist
                    </Text>
                    <Text>
                    Institute of Psychology 
                    </Text>
                </View>
                <Text style={styles.txtAlumnii}>Online</Text>
            </TouchableOpacity>
           
            <TouchableOpacity 
            onPress={()=>navigation.navigate("Chat2")}
            style = {styles.shapeIsi}>

                <Image 
                    source={require('../assets/avatar1.png')}
                    style={{
                        width:120,
                        height:125,
                        borderRadius:15
                    }}
                />
                <View style ={styles.containerTulisan}>
                    <Text style={styles.txtStyle}>
                    Drs. Rudy Nurohman, S.Psi.
                    </Text>
                    <Text>
                        Expert Psychologist
                    </Text>
                    <Text>
                    Institute of Psychology 
                    </Text>
                </View>
                <Text style={styles.txtAlumni}>Online</Text>
            </TouchableOpacity>
           
                
        </View>
    )
}

export default Psikologis;

const styles = StyleSheet.create({
    arrowback:{
        marginVertical:15,
        marginTop:20,
    },
    container:{
        backgroundColor:"#4169e1",
        flex:1,
        marginTop:Constants.statusBarHeight,
        flexDirection:"column"
    },
    header:{
     backgroundColor:"#1e90ff",
     height:"28%",
     borderBottomLeftRadius:20,
     borderBottomRightRadius:20,
        
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
        color:"#fff",
        paddingHorizontal:10,
    },
    shapeIsi:{
        backgroundColor:"#FFF",
        height:"20%",
        flexDirection:"row",
        marginTop:60,
        alignItems:"center",
        borderRadius:15
    },
    profi:{
        width:100,
        height:100,
        borderRadius:15,
    },  
    containerTulisan:{
        flexDirection:"column",
        paddingHorizontal:10,
        paddingTop:10
    },
    txtAlumni:{
        fontWeight:"bold",
        color:"#00ff00",
    },
    txtAlumnii:{
        fontWeight:"bold",
        color:"#00ff00",
        paddingLeft:30,
    },
    txtStyle:{
        paddingRight:5,
    }
})
