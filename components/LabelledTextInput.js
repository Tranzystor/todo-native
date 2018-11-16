import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import BareTextInput from "./BareTextInput";
import Header from './Header';

export default class LabelledTextInput extends Component {
    render() {
        const { label } = this.props;
        return ( 
            <View style={{flexGrow: 1 }}>
                <View style={styles.header}>
                    <Header>{label}</Header>
                </View>
                <BareTextInput {...this.props}></BareTextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 10
    }
});