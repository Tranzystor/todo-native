
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const mainColor = '#1378ba'; // blue

export default class AddTaskButton extends Component {
  render() {
    return <TouchableOpacity
                onPress={args => this.props.onPress(args)}
                style={styles.button}
                >
                <Text style={{fontSize: 25, padding: 0, color: 'white'}}>+</Text>
            </TouchableOpacity>
  }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: mainColor,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: 'rgba(0,0,0,0)',
      alignItems:'center',
      justifyContent:'center',
      width: 40,
      height: 40,
    },
  });