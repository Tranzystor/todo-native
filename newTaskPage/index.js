

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import BareTextInput from '../components/BareTextInput';
import LabelledTextInput from '../components/LabelledTextInput';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class NewTaskPage extends Component {

  render() {
    return (
      <View style={{paddingLeft: 15, paddingRight: 15}}>
        <Text>icon <Icon name="date-range" color="black" size={20} /> icon</Text>
        <Text>icon <Icon name="cancel" color="black" size={20} /> icon</Text>
        <Text>icon <Icon name="access-time" color="black" size={20} /> icon</Text>
        <BareTextInput placeholder='abc' />
        <BareTextInput placeholder='abc' />
        <View style={{marginTop: 25}}>
          <LabelledTextInput placeholder='abc' />
        </View>
        <View style={{marginTop: 25}}>
          <LabelledTextInput label='To do description' placeholder='abc' />
        </View>
        <View style={{marginTop: 25}}>
          <LabelledTextInput label='Date' placeholder='abc' />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'azure'}}>
          {/* <BareTextInput placeholder='here' label='' /> */}
          {/* <BareTextInput placeholder='here' label='' /> */}
          <LabelledTextInput placeholder='here' />
          <View style={{backgroundColor: 'red'}}>
            <Icon name="date-range" color="black" size={20} />
          </View>
        </View>
        <View style={{marginTop: 25, flex: 1}}>
          <LabelledTextInput label='Date' placeholder='after' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
