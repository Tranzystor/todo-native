import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const mainColor = '#1378ba'; // blue

export default class SimpleTask extends Component {
  render() {
    const { description, formattedDate } = this.props;
    return (
        <View style={{flex: 1, flexDirection: 'row', height: 40, backgroundColor: 'white', marginBottom: 5, padding: 4}}>
            <Text style={{width: 20, marginLeft: 5}}>X</Text>
            <View>
                <Text style={{fontSize: 15}}>{description}</Text>
                <Text style={{fontSize: 12, color: mainColor}}>{formattedDate}</Text>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  });