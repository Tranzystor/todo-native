import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

const mainColor = '#1378ba'; // blue

export default class Header extends Component {
  render() {
    const { children } = this.props;
    return <Text style={styles.header}>{children}</Text>;
  }
}

const styles = StyleSheet.create({
    header: {
      color: mainColor,
      fontWeight: 'bold',
      fontSize: 10
    },
  });