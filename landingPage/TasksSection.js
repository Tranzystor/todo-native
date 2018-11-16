import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './../components/Header';
import SimpleTask from './SimpleTask';

export default class TasksSection extends Component {
  render() {
    const { tasks, header } = this.props;
    return (
      <View style={{margin: 1}}>
        <View style={{marginBottom: 5, marginTop: 5}}>
          <Header>{header}</Header>
        </View>
        {tasks.map((x, i) => 
            <SimpleTask key={i} description={x.description} formattedDate={x.date.format('dddd')}></SimpleTask>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
});