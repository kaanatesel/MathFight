import { useState } from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";

const ResultBtn = (props) => {

    const style = props.isCorrect ? styles.correct : styles.wrong;

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
    correct: {
        backgroundColor: '#80cb94',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
        borderColor: '#4ab567',
        borderWidth: 3,
        marginBottom: 10
    },
    wrong: {
        backgroundColor: '#ff471a',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
        borderColor: '#e62e00',
        borderWidth: 3,
        marginBottom: 10
    },
    primaryButtonText: {
        color: '#FFFFFF',
        fontSize: 10
    }
});

export default ResultBtn;