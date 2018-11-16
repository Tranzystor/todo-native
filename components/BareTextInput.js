import React, { Component } from "react";
import { StyleSheet, TextInput, View } from 'react-native';

const inactiveBorderColor = '#464646';
const mainColor = '#1378ba'; // blue 

export default class BareTextInput extends Component{
    state = {
        inputFocus: false
    }

    toggleFocus = () => {
        this.setState(prevState => {
            return { inputFocus: !prevState.inputFocus }
        });
    }

    render() {
        const { placeholder } = this.props;
        let wrapperStyle = styles.wrapper;
        if(this.state.inputFocus){
            wrapperStyle = {
                ...wrapperStyle,
                ...styles.wrapperWithFocusedInput
            }
        }

        return (
            <View style={wrapperStyle}>
                <TextInput onFocus={this.toggleFocus} 
                            onBlur={this.toggleFocus} 
                            style={styles.input} 
                            selectionColor={mainColor}
                            placeholder={placeholder} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: 20,
        borderBottomWidth: 1,
        borderBottomColor: inactiveBorderColor,
    },
    wrapperWithFocusedInput: {
        borderBottomWidth: 2,
        borderBottomColor: mainColor,
    }
});