import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import GlobalStyles from "../Components/GlobalStyles";
import MathFightText from "../Components/MathFightText";

import backButtonIcon from "../assets/arrow-back-icon.png";
import TeacherSvg from '../assets/undraw_teacher_re_sico.svg';
import SquerBlock from "../Components/SquerBlock";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";

function SetGamePage({ navigation }) {

    const [operatorArray, setOperatorArray] = useState(Array(4).fill(false));
    const [buttonStyles, setButtonStyles] = useState(Array(4).fill(styles.squerButton));

    const opatorBlock = (id) => {
        let newOpArr = operatorArray;
        newOpArr[id] = !operatorArray[id];
        setOperatorArray([...newOpArr]);

        let newStyleList = buttonStyles;
        newStyleList[id] = operatorArray[id] ? styles.squerButtonSelected : styles.squerButton;
        setButtonStyles([...newStyleList]);
    }

    function submitOperatorArray(props) {
        alert(operatorArray);
    }

    return (
        <View style={GlobalStyles.container}>
            <View style={styles.upperViewContainer}>
                <View style={styles.backButon}>
                    <TouchableHighlight style={{
                        width: 64,
                    }} onPress={() => navigation.goBack()}>
                        <Image source={backButtonIcon} alt='' />
                    </TouchableHighlight>
                </View>
                <TeacherSvg style={styles.teacherSvg} width={200} height={200} />
            </View>
            <View style={styles.lowerViewContainer} >
                <MathFightText type="header">
                    Pick your operators?
                </MathFightText>
                <View style={styles.buttonContainer}>
                    <View style={styles.innnerButtonWrapper}>
                        <SquerBlock style={buttonStyles[0]} onPress={() => opatorBlock(0)} title='+' />
                        <SquerBlock style={buttonStyles[1]} onPress={() => opatorBlock(1)} title='-' />
                    </View>
                    <View style={styles.innnerButtonWrapper}>

                        <SquerBlock style={buttonStyles[2]} onPress={() => opatorBlock(2)} title='x' />
                        <SquerBlock style={buttonStyles[3]} onPress={() => opatorBlock(3)} title='/' />
                    </View>
                </View>
            </View>
            <View style={styles.startBtnContainer}>
                <PrimaryButton onPress={submitOperatorArray} title='Submit' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    upperViewContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 15
    },
    lowerViewContainer: {
        flex: 2,
        alignItems: 'center',
        paddingBottom: 20
    },
    teacherSvg: {
        flex: 1
    },
    backButon: {
        flex: 1,
        width: 'auto'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    innnerButtonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
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
    startBtnContainer: {
        flex: 0.5,
        alignItems: 'center'
    }
});

export default SetGamePage;