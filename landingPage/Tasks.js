import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import TasksSection from "./TasksSection";
import AddTaskButton from './AddTaskButton';
import moment from 'moment';

const tasks = [
  { description: 'add 0', date: moment()},
  { description: 'add 1', date: moment().add(1, 'days')},
  { description: 'add 2', date: moment().add(2, 'days')},
  { description: 'add 3', date: moment().add(3, 'days')},
  { description: 'add 4', date: moment().add(4, 'days')},
  { description: 'add 5', date: moment().add(5, 'days')},
  { description: 'add 6', date: moment().add(6, 'days')},
  { description: 'add 7', date: moment().add(7, 'days')},
  { description: 'add 8', date: moment().add(8, 'days')},
  { description: 'add 9', date: moment().add(9, 'days')},
  { description: 'add 10', date: moment().add(10, 'days')},
  { description: 'add 10', date: moment().add(10, 'days')},
  { description: 'add 10', date: moment().add(10, 'days')},
  { description: 'add 10', date: moment().add(10, 'days')},
  { description: 'add 10', date: moment().add(10, 'days')},
  { description: 'add 10', date: moment().add(10, 'days')},
  { description: 'add 10', date: moment().add(10, 'days')},
];

const groupTasks = tasks => {
  const today = moment();
  const tomorrow = moment().add(1, 'days');
  const todayTasks = tasks.filter(x => x.date.isSame(today, 'day'));
  const tomorrowTasks = tasks.filter(x => x.date.isSame(tomorrow, 'day'));

  const endOfThisWeek = moment().day(7);
  const thisWeekTasks = tasks.filter(x => {
    const result = x.date.isBetween(tomorrow, endOfThisWeek);
    return result;
  });

  const futureTasks = tasks.filter(x => x.date.isAfter(endOfThisWeek));

  return {
    today: todayTasks,
    tomorrow: tomorrowTasks,
    week: thisWeekTasks,
    future: futureTasks
  }
}

export default class Tasks extends Component {
  render() {
    const groups = groupTasks(tasks);

    const todayHeader = 'Today';
    const tomorrowHeader = 'Tomorrow';
    const thisWeekHeader = 'This week';
    const futureHeader = 'Future';

    return (
      <View style={{flex: 1, justifyContent: 'flex-start', padding: 10}}>
        <FlatList data={[
              {tasks: groups.today, header: todayHeader},
              {tasks: groups.tomorrow, header: tomorrowHeader},
              {tasks: groups.week, header: thisWeekHeader},
              {tasks: groups.future, header: futureHeader}
            ]}
            keyExtractor={(_, index) => index.toString()}
            renderItem={section => <TasksSection key={section.index} tasks={section.item.tasks} header={section.item.header} />} />
          <View style={{position:'absolute', bottom: 20, right: 20}}>
            <AddTaskButton onPress={() => this.props.navigation.navigate('NewTaskPage')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});