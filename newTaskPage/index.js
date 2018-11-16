

import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import BareTextInput from '../components/BareTextInput';
import LabelledTextInput from '../components/LabelledTextInput';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class NewTaskPage extends Component {

  state = {
    text: 'default'
  }

  textChanged = (text) => {
    this.setState({text});
  }

  render() {
    return (
      <View style={{paddingLeft: 15, paddingRight: 15, paddingTop: 10}}>
        <BareTextInput placeholder='placeholder' textChanged={this.textChanged} />
        <BareTextInput placeholder='second' />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
