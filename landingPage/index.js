

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Footer from './Footer';
import Header from './Header';
import Tasks from './Tasks';

const tasksBackgroundColor = '#e8e8e8';
const mainColor = '#1378ba'; // blue

export default class LandingPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 0.1, backgroundColor: mainColor}}>
          <Header />
        </View>
        <View style={{flex: 1, backgroundColor: tasksBackgroundColor}}>
          <Tasks navigation={navigation} />
        </View>
        <View style={{flex: 0.1, backgroundColor: mainColor}}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
