import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "APA ITU SELFCARE ID?",
    text:
      "SELFCARE ID merupakan aplikasi 'SelfCare' yang memiliki fitur-fitur untuk membantu anda dalam merawat kesehatan mental anda. ",
    image: require("./images/1.png"),
  },
  {
    key: "two",
    title: "FITUR APA SAJA YANG SAYA DAPAT PADA APLIKASI SELFCADE ID?",
    text: 
      "Ada 4 fitur dalam aplikasi ini: TO DO LIST - Fitur list pengingat kegiatan favorit atau hobi anda, GRATITUDE LIST - Fitur list hal-hal yang anda syukuri, RELAX TIMER - Fitur timer/pengatur waktu untuk meditasi relaksasi nafas, dan KONSULTASI CHAT - Fitur utama dalam aplikasi ini menyediakan ruang chat untuk berkonsultasi dengan Psikolog (ahli psikologis)",
    image: require("./images/4.png"),
  },
  {
    key: "three",
    title: "APA ITU FITUR CHAT KONSULTASI?",
    text:
      "Fitur ini menyediakan ruang chat untuk anda yang telah bergabung dalam MEMBER PREMIUM, keuntungannya anda dapat berkonsultasi dengan Psikolog yang kami miliki untuk membantu keadaan psikologis anda.",
    image: require("./images/3.png"),
  },
  {
    key: "four",
    title: "BAGAIMANA CARA AGAR SAYA MENDAPAT FITUR CHAT KONSULTASI?",
    text:
      "Anda dapat melakukan pembayaran terlebih dahulu dengan beberapa cara. Pembayaran ini disediakan di menu 'Pembayaran' pada halaman 'Account', lalu pilih paket Konsultasi Chat per-bulan.",
    image: require("./images/2.png"),
  },
];

export default class FAQ extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "50%",
            width: "100%",
          }}
        />
        <Text
          style={{
            paddingTop: 15,
            paddingBottom: 10,
            fontSize: 23,
            paddingHorizontal:30,
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center",
            textAlign: "center"
          }}
        >
          {item.title}
        </Text>

        <Text style={{
          textAlign:"justify",
          color:"#b5b5b5",
          fontSize:15,
          paddingHorizontal:30
        }}>
          {item.text}
        </Text>
      </View>
    );
  };

  render() {
    if (this.state.showHomePage){
      return <FAQ/>
    } else 
    return (
    <AppIntroSlider
      renderItem={this._renderItem} 
      data={slides} 
      activeDotStyle={{
        backgroundColor:"#21465b",
        width:30
      }}
     />
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
