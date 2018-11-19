import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity
} from "react-native";
import BareTextInput from "../components/BareTextInput";
import LabelledTextInput from "../components/LabelledTextInput";
import Icon from "react-native-vector-icons/MaterialIcons";
import DateTimePicker from "react-native-modal-datetime-picker";

export default class NewTaskPage extends Component {
  state = {
    text: "default"
  };

  textChanged = text => {
    this.setState({ text });
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this._hideDateTimePicker();
  };

  render() {
    return (
      <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 10 }}>
        <BareTextInput
          placeholder="placeholder"
          textChanged={this.textChanged}
        />
        <BareTextInput placeholder="second" />
        <LabelledTextInput label="label" icon="alarm" />
        <LabelledTextInput label="label" icon="timeline" />
        <LabelledTextInput label="" />
        <Icon />
        <Text>
          <Icon name="alarm" size={16} color="#4F8EF7" icon="watch" />
        </Text>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
