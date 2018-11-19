import React, { Component } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const inactiveBorderColor = "#464646";
const mainColor = "#1378ba"; // blue

export default class BareTextInput extends Component {
  state = {
    inputFocus: false,
    text: ""
  };

  toggleFocus = () => {
    this.setState(prevState => {
      return { inputFocus: !prevState.inputFocus };
    });
  };

  onChangeText = text => {
    this.setState({ text });
    if (this.props.textChanged) {
      this.props.textChanged(text);
    }
  };

  render() {
    const { placeholder } = this.props;
    let wrapperStyle = styles.wrapper;
    if (this.state.inputFocus) {
      wrapperStyle = {
        ...wrapperStyle,
        ...styles.wrapperWithFocusedInput
      };
    }

    return (
      <View style={wrapperStyle}>
        <TextInput
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus}
          style={styles.input}
          selectionColor={mainColor}
          placeholder={placeholder}
          onChangeText={this.onChangeText}
          value={this.state.text}
          style={styles.input}
        />
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
