import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from "react-native";

const PrimaryButton = (props) => {
    return (
        <TouchableHighlight
            style={styles.primaryButton}
            onPress={props.onPress}>
            <Text style={styles.primaryButtonText}>{props.title}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: '#42417F',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 245,
        height: 50
    },
    primaryButtonText: {
        color: '#F0D654',
        fontSize: 15
    }
});

export default PrimaryButton;