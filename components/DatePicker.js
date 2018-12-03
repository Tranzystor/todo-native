import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/MaterialIcons";
import moment from "moment";

const mainColor = "#1378ba"; // blue
const inactiveBorderColor = "#464646";

export default class Header extends Component {
  state = {
    isDateTimePickerVisible: false,
    isTimePickerVisible: false,
    fullDate: null, // moment
    time: null, // format ??
    date: null // format "MM-DD-YYYY"
  };

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  showTimePicker = () => this.setState({ isTimePickerVisible: true });

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  hideTimePicker = () => {
    this.setState({ isTimePickerVisible: false });
  };

  handleDatePicked = date => {
    this.setState({
      fullDate: moment(date),
      date: moment(date).format("MM-DD-YYYY")
    });
    this.hideDateTimePicker();
  };

  handleTimePicked = time => {
    const timeMoment = moment(time);
    const merged = this.state.fullDate.set({
      hour: timeMoment.get("hour"),
      minute: timeMoment.get("minute")
    });

    this.setState({
      fullDate: merged,
      time: moment(time).format("HH:mm")
    });
    this.hideTimePicker();
  };

  onIconClicked = () => {
    this.setState({ fullDate: null, time: null, date: null });
  };

  render() {
    let wrapperStyle = styles.wrapper;

    if (this.state.inputFocus) {
      wrapperStyle = {
        ...wrapperStyle,
        ...styles.wrapperWithFocusedInput
      };
    }

    return (
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={this.showDateTimePicker}
            style={wrapperStyle}
          >
            <TextInput
              style={styles.input}
              selectionColor={mainColor}
              placeholder="Brak daty"
              value={this.state.date}
              style={styles.input}
              editable={false}
            />
          </TouchableOpacity>

          <Icon name="book" size={16} color="#4F8EF7" />

          {this.state.fullDate && (
            <TouchableHighlight onPress={this.onIconClicked}>
              <Icon name="cancel" size={16} color="#4F8EF7" />
            </TouchableHighlight>
          )}
        </View>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />

        {this.state.fullDate && (
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity
                style={wrapperStyle}
                onPress={this.showTimePicker}
              >
                <TextInput
                  style={styles.input}
                  selectionColor={mainColor}
                  placeholder="brak godziny"
                  value={this.state.time}
                  style={styles.input}
                  editable={false}
                />
              </TouchableOpacity>

              {this.state.time && (
                <TouchableHighlight onPress={this.onIconClicked}>
                  <Icon name="cancel" size={16} color="#4F8EF7" />
                </TouchableHighlight>
              )}
            </View>

            <DateTimePicker
              mode="time"
              isVisible={this.state.isTimePickerVisible}
              onConfirm={this.handleTimePicked}
              onCancel={this.hideDateTimePicker}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 1,
    margin: 2
  },

  wrapper: {
    flexGrow: 1,
    height: 25,
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: inactiveBorderColor,
    marginBottom: 3
  },

  wrapperWithFocusedInput: {
    borderBottomWidth: 2,
    borderBottomColor: mainColor,
    marginBottom: 3
  }
});
