import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const SquerBlock = (props) => {

    const style = props.style ? props.style : styles.squerButton;

    return (
        <TouchableHighlight
            style={style}
            onPress={props.onPress}
            selected={props.selected}
        >
            <Text style={styles.primaryButtonText}>{props.title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    squerButton: {
        backgroundColor: '#42417F',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
    },
    squerButtonSelected: {
        backgroundColor: '#42417F',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        borderColor: '#66C17F',
        borderWidth: 3
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 25
    }
});

export default SquerBlock;