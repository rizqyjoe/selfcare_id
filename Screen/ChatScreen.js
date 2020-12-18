import React from 'react';
import {StyleSheet, Button, View,Text} from 'react-native';
import Constants from 'expo-constants';
import Modal from 'react-native-modal';
import ChatWidget from '@papercups-io/chat-widget-native';

export default function ChatScreen() {
  const [isModalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
        <Text >Status Anda: member premium</Text>
      <Button title="Open chat" onPress={() => setModalVisible(true)} />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(true)}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <ChatWidget
            accountId="ff689343-4b5b-4b97-9650-38ccd81b598e"
            title="Konsultasi!"
            subtitle="We'll reply as soon as we can 😊"
            greeting="Selamat datang silahkan konsultasi dengan psikologi kami yang terbaik"
            baseUrl="https://app.papercups.io"
            customer={{
              name: 'Teja',
              email: 'sensowner@gmail.com',
              external_id: '123',
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, padding: 24,
    marginTop:Constants.statusBarHeight,
  },modal: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
});