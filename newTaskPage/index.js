import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import BareTextInput from "../components/BareTextInput";
import LabelledTextInput from "../components/LabelledTextInput";
import Icon from "react-native-vector-icons/MaterialIcons";
import DatePicker from "../components/DatePicker";

export default class NewTaskPage extends Component {
  state = {
    text: "default"
  };

  textChanged = text => {
    this.setState({ text });
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

        <DatePicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
