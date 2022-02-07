import { Button, Image, StyleSheet, Text, View } from "react-native";

import WelcomeIcon from '../assets/undraw_mathematics.svg';

import PrimaryButton from "../Components/PrimaryButton";
import MathFightText from "../Components/MathFightText";
import GlobalStyles from "../Components/GlobalStyles";

function WelcomePage({ navigation }) {
    return (
        <View style={GlobalStyles.container}>
            <View style={styles.imgWrapper}>
                <WelcomeIcon width={200} height={200} />
            </View>
            <View style={styles.buttonContainer}>
                <MathFightText type='header' >Math Fight</MathFightText>
                <View style={styles.buttonWrapper}>
                    <PrimaryButton style={styles.button} onPress={() => navigation.navigate('SetGamePage')} title="Single Player" />
                    <PrimaryButton onPress={() => navigation.navigate('SetGamePage')} title="Duel With Friend" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imgWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonContainer: {
        padding: 20,
        flex: 1.25,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
});


export default WelcomePage;