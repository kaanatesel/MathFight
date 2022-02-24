import { Button, Image, StyleSheet, Text, View } from "react-native";

import WelcomeIcon from '../assets/undraw_mathematics.svg';

import PrimaryButton from "../Components/PrimaryButton";
import MathFightText from "../Components/MathFightText";
import GlobalStyles from "../Components/GlobalStyles";
import { useEffect, useState } from "react";
import ResultBtn from "../Components/ResutlBtn";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

function EndGamePage({ route, navigation }) {

    const { answerArray, trueCount } = route.params;


    const buttonArray = JSON.parse(answerArray).map((item, id) => {
        let questionNo = id + 1;
        return <ResultBtn key={id} isCorrect={item} title={questionNo} />
    });

    // 

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.buttonContainer}>
                <MathFightText type='header' >End Game</MathFightText>
            </View>
            <View style={styles.resultContainer}>
                {buttonArray}
            </View>
            <View style={styles.textWrapper}>
                <MathFightText type='header' >
                    You got {trueCount}  questions right.
                </MathFightText>
                <PrimaryButton style={styles.button} onPress={() => navigation.navigate('Welcomepage')} title="Go to main page" />
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
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'space-evenly'
    },
    resultContainer: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent: 'space-around'
    },
    textWrapper: {
        flex: 1
    },
});


export default EndGamePage;