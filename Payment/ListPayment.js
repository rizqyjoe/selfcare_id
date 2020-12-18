import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Headline } from 'react-native-paper';
import Constants from 'expo-constants';
import { RadioGroup, RadioButton } from 'react-native-radio-button';

export default class ListPayment extends React.Component {
  state = {
    radioItems: [
      {
        id: 1,
        label: 'Item 1',
        selected: false,
      },
      {
        id: 2,
        label: 'Item 2',
        selected: false,
      },
      {
        id: 3,
        label: 'Item 3',
        selected: false,
      },
    ],
  };

  onSelect(index, value) {
    console.log(`Selected index: ${index} , value: ${value}`);
  }
  render() {
    return (
      <View style={styles.containerr}>
        <Text>Sena</Text>
        <RadioGroup 
          selectedIndex={1}
          onSelect={(index, value) => this.onSelect(index, value)}
          >
          {this.state.radioItems.map((item, index) => {
            return (
              <RadioButton
                key={index}
                value={item.label}
                displayText={item.label}
                displayTextColor="#000"
                displayTextActiveColor="#fff"
                prefixColor="rgba(0, 0, 0, 0.4)"
                prefixActiveColor="rgba(0, 0, 0, 0.4)"
              />
            );
          })}
        </RadioGroup>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  headline: {
    marginTop: 20,
  },
});
