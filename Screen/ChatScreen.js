import React from 'react';
import {StyleSheet,Image, Button, View,TouchableOpacity,Text, ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Modal from 'react-native-modal';
import ChatWidget from '@papercups-io/chat-widget-native';
import { useNavigation } from '@react-navigation/native';

 const ChatScreen=({navigation})=> {
  const [isModalVisible, setModalVisible] = React.useState(false);
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
          <Image source={require('../assets/backarrow.png')} style={{width:25,height:10, marginTop:10}}/>

<ImageBackground
  source={require('../assets/garox.jpg')}
  style={styles.ImageBackground}/>

      <View style={styles.containerbelow}>
        <View style={styles.belowPosisi}>
         
          <View>
            <Text style={styles.titleTxt}>
              Drs.Teja Anggora S.Psi
            </Text>
            <View style={styles.keteranganTxt}>
                <Text style={styles.lokasiTxt}>
                  Aktif 08.00-15.00 dan 18.00-20.00
                </Text>
                <Text style={styles.lokasiTxt}>
                  lulusan U-NIBBA Terbaik 
                </Text>
            </View>

          </View>
        </View>

          <View style={styles.containerInfo}>
            <View style={styles.containerTxt}>
                <Text style={styles.infoTxt}>
                  Expert in Psychology 
                </Text>
                <Text style={{fontSize:14,fontWeight:"bold"}}>
                  Above 2 years 
                </Text>
            </View>

            <View style={styles.containerTxt}>
                <Text style={styles.infoTxt}>
                  Current Status
                </Text>
                <Text>
                  Full Time
                </Text>
            </View>
          </View>

          <View style={styles.containerKotak}>
            <Text style={styles.judulTxt}>
              Description
            </Text>
            <Text style={styles.isiKontenTxt}>
              Halo saya Teja, expert sudah punya pengalaman psikologi 
              dan mentoring kesehatan mental di dunia industri 
              selama lebih 2 tahun.
            </Text>
          </View>

      </View>

      <TouchableOpacity
            style = {styles.touchContainer}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.textOk}>Konsultasi</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
       // onBackdropPress={() => setModalVisible(true)}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <ChatWidget
            accountId="0d1288d6-41b5-441a-9ca7-7117477a480f"
            title="Drs.Teja Anggora S.Psi"
            subtitle="We'll reply as soon as we can 😊"
            greeting="Selamat datang silahkan konsultasi dengan psikologi kami yang terbaik"
            baseUrl="https://app.papercups.io"
            customer={{
              name: 'Teja',
              email: 'teja@gmail.com',
              external_id: '123',
            }}
          />
        </View>
      </Modal>
    </View>
  );
}
export default ChatScreen;
const styles = StyleSheet.create({
  modal: {
    
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  container:{
    backgroundColor:"#4169e1", 
    paddingHorizontal: 20,
    height:"100%",
    marginTop:Constants.statusBarHeight,
  },
  ImageBackground:{
    marginVertical:20,
    alignSelf: 'center',
    width:200,
    height:200,
  },
  backShape: {
    borderRadius: 8,
    height:40,
    width:40,
    color:"white",
    marginLeft:-50,
    alignItems:"center",
    justifyContent:"center",
  },
  containerbelow:{
    backgroundColor:"#e8eaea",
    padding:10,
    width:330,
    borderRadius:15
  },
  belowPosisi:{
    flexDirection:"row",
    alignItems:"center"
  },
  titleTxt:{
  fontSize:18,
  fontWeight:"bold",
  paddingHorizontal:10    
  },
  keteranganTxt:{
    flexDirection:"column",
    fontWeight:"bold",
    color:"#000",
    fontSize:14
  },
  lokasiTxt:{
    fontWeight:"bold",
    fontSize:12,
    color:"red",
    marginLeft:25,
    paddingHorizontal:10,
  },
  containerInfo:{
    flexDirection:"row",
    marginTop:20,
  },
  containerTxt:{
    backgroundColor:"#FFF",
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:8,
    marginRight:10

  },
  infoTxt:{
    fontWeight:"bold",
    color:"#B8B8B8",
  },
  info1Txt:{
    fontWeight:"bold",
  },
  containerIsiTxt:{
    backgroundColor:"#FFF",
    paddingVertical:10,
    paddingHorizontal:10,
    marginLeft:35,
    borderRadius:8,
  },
  isiInfoTxt:{
    fontWeight:"bold",
    color:"#B8B8B8",
    marginRight:20
  },
  isiInfo1Txt:{
    fontWeight:"bold"
  },
  containerKotak:{
    backgroundColor:"#FFF",
    borderRadius:15,
    padding:20,
    marginTop:20
  },
  judulTxt:{
    fontWeight:"bold",
    fontSize:20,
    marginBottom:10
  },
  isiKontenTxt:{
    fontWeight:"bold",
    color:"#B2B2B2"
  },
  containerShapechat:{
    width:"100%",
    alignItems:"flex-end"
  },
  posisiChat:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:30,
  },
  touchContainer:{
    height:40,
    width:200,
    borderRadius:15,
    marginTop:10,
    marginLeft:60,
    backgroundColor:"#beccf6"
},
textOk:{
    alignItems:"center",
    justifyContent:"center",
    marginLeft:40,
    fontSize:25,
    fontWeight:"bold"
}
});