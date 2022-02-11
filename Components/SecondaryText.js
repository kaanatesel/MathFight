import { StyleSheet, Text } from "react-native";

const SecondaryText = (props) => {

    const type = props.type === 'header' ? styles.header : styles.normalText;

    return (
        <Text style={Object.assign({}, styles.text, type)} >
            {props.children}
        </Text >
    );
}


const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontSize: 40,
        fontFamily: 'sans-serif-condensed'
    },
    header: {
        fontSize: 25,
    },
    normalText: {
        fontSize: 15,
    }
});

export default SecondaryText;