import { StyleSheet, Text } from "react-native";

const MathFightText = (props) => {

    const type = props.type === 'header' ? styles.header : styles.normalText;

    return (
        <Text style={Object.assign({}, styles.text, type)} >
            {props.children}
        </Text >
    );
}


const styles = StyleSheet.create({
    text: {
        color: '#F0D654',
        fontSize: 40,
        fontFamily: 'sans-serif-condensed'
    },
    header: {
        fontSize: 40,
    },
    normalText: {
        fontSize: 20,
    }
});

export default MathFightText;