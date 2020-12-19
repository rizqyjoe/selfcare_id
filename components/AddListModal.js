import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { theme } from '../reusable/theme';
import TempData from '../reusable/tempData';

export default class AddListModal extends React.Component {
  backgroundColors = [
    '#ff0000',
    '#1100ff',
    '#00ff2a',
    '#fff700',
    '#00fffb',
    '#ff00fb',
  ];

  state: {
    name: '';
    color: '#ff0000';
  };

  createToDo = () => {
    const { name, color } = this.state;

    const list = {name,color};

    this.props.addList(list);

    TempData.push({
      name,
      todos: [],
    });
    this.setState({ name: "" });
    this.props.closeModal();
  };

  renderColors() {
    return this.backgroundColors.map((color) => {
      return (
        <TouchableOpacity
          key={color}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => this.setState({ color })}
        />
      );
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: 'absolute', top: 35, right: 25 }}
          onPress={this.props.closeModal}>
          <AntDesign name="close" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
          <Text style={styles.titles}>Create To Do List</Text>
          <TextInput
            style={styles.input}
            placeholder={'Write your list.'}
            onChangeText={(text) => this.setState({ name: text })}
          />

          <View style={{ flexDirection: 'row' }}>{this.renderColors()}</View>

          <TouchableOpacity
            style={[styles.create, { backgroundColor: theme.colors.blue }]}
            onPress={this.createToDo}>
            <Text style={{ color: theme.colors.white, fontWeight: '700' }}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      // <View style={styles.container}>
      //   <Text>Modal Dong hehe</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titles: {
    fontSize: 28,
    fontWeight: '700',
    color: theme.colors.black,
    alignSelf: 'center',
    marginVertical: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.blue,
    borderRadius: 8,
    height: 40,
    marginTop: 6,
    paddingHorizontal: 12,
    fontSize: 18,
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorSelect: {
    width: 15,
    height: 15,
    borderRadius: 2.5,
  },
});
