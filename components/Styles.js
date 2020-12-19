import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    containerSearchBar:{
        flex:1,
        justifyContent:'center',
        padding:8,
        paddingTop: Constants.statusBarHeight,
    },
    buttonPrimary:{

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,

        backgroundColor:"#4982C1",
        marginTop:20,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:22,
        height:48,
        marginHorizontal:50        
    },    
    textInputPrimary:{
        marginTop:8,
        marginHorizontal:21,
        height:48,
        borderWidth:1,
        borderColor:"#C3C3C3"
    },
    containerImage:{
        flex:1,
        alignItems:"center",
        justifyContent:"flex-end",
        padding:16
    },
    BottomNaviggator:{
        paddingBottom:Constants.statusBarHeight,
    },
    textTopUpHeader:{
        textAlign:"center",
        fontSize:24,
        marginTop:6        
    },
    cardText:{
        fontSize:18,
        fontWeight:'400',
        color:"#FFFFFF",
        marginVertical:6,
        textAlign:"center"        
    },      
    card:{
        marginTop:6,
        backgroundColor:"#4982C1",
        width:280,
        alignSelf:"center",
        paddingVertical:6
    },
    containerContent:{
        flex:2,
        alignItems:"stretch",
        justifyContent:"flex-start",
    },
    containerHeader:{
        flex:2,
        alignItems:"center",
        justifyContent:"center"
    },
    containerTransaksiItem:{
        flex:1,
        flexDirection:"row",        
        height:80,     
        marginTop:8,                                           
        borderRadius:2,                
        borderStyle: "solid",
        borderWidth:1,
        backgroundColor:'#FFF'
    },
    IconTransaksiItem:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"        
    },
    ContentTransaksiItem:{
        flex:3,
        padding:6        
    },
    DateTransaksiItem:{
        flex:2,
        justifyContent:"center",
        alignItems:"center"
    },
    textPrimary:{
        fontSize:18,
        fontWeight:'400',
        color:"#FFFFFF",
        marginVertical: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    textPremium:{
        fontSize:18,
        fontWeight:'400',
        color:"#fffb19",
        marginVertical: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
    },
    containerProfile:{
        width:120,
        height:120,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4,
        marginTop: 10
    },
    container_profile:{
        flex:3,
        backgroundColor:"#005690",
        justifyContent:"center",
        alignItems:"center"
    },
    headerbg: {
        flex: 3,
        width: null,
        alignSelf: 'stretch',
        justifyContent:"center",
        alignItems:"center",
    },
    buttonContainer:{                        
        padding:8,
        flex:1, 
        padding:10,
        alignItems: 'center',               
    },
    buttonIcon:{
        height:50,
        width:50,        
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10                                        
    },
    buttonText:{
        color:"#FFFFFF",
        fontSize:12,
        fontWeight:"500"
    },
    title_brand:{
        fontSize:20,
        fontStyle:"italic",
        fontWeight:"bold",        
        textAlign:"center",
        padding:8,        
        color: '#3fc7d4',        
    },
    link_register:{
        fontSize:14,
        textAlign:"center",
        margin:8,
        textDecorationLine:"underline"                
    },
    container_button_menu:{
        height:100,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor: "#4982C1",            
        padding:8,
        borderRadius:5,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    container_home:{
        flex: 1, 
        alignItems:'stretch',
        backgroundColor:'#f2f2f2'        
    }, 
    toolbar_home:{
        flex:1,
        backgroundColor:'#FFF',
        justifyContent:'flex-end',       
        alignItems:'flex-start',
        padding:16        
    },    
    text_harga:{
        fontSize:32,
        fontWeight:'bold'
    },
    container_menu:{
        flex:4,   
        padding:16,              
    },
    container_button_menu:{
        height:100,
        flexDirection:"row",
        justifyContent:"space-around",
        backgroundColor: "#4982C1",            
        padding:8,
        borderRadius:5,
    },
    input:{        
        marginBottom:8,
        borderWidth: 1,
        borderColor:'gray'        
    },
});

export default styles;