import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BareTextInput from "./BareTextInput";
import Header from "./Header";
import Icon from "react-native-vector-icons/MaterialIcons";

const mainColor = "#1378ba"; // blue

export default class LabelledTextInput extends Component {
  render() {
    const { label, icon } = this.props;
    return (
      <View style={{ flexGrow: 1 }}>
        {!!label && (
          <View style={styles.header}>
            <Header>{label}</Header>
          </View>
        )}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <BareTextInput {...this.props} />
          <Icon name={icon} size={16} color={mainColor} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 1
  }
});
