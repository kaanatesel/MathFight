import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import GlobalStyles from "../Components/GlobalStyles";

import backButtonIcon from "../assets/arrow-back-icon.png";
import TeacherSvg  from '../assets/undraw_teacher_re_sico.svg';

import SquerBlock from "../Components/SquerBlock";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import SecondaryText from "../Components/SecondaryText";

function SetGamePage({ navigation }) {

    const [operatorArray, setOperatorArray] = useState(Array(4).fill(false));
    const [buttonStyles, setButtonStyles] = useState(Array(4).fill(styles.squerButton));

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Select question count.');
    const [items, setItems] = useState([
        { label: '3', value: '3' },
        { label: '5', value: '5' },
        { label: '10', value: '10' },
        { label: '15', value: '15' },
        { label: '20', value: '20' },
    ]);

    const opatorBlock = (id) => {
        let newOpArr = operatorArray;
        newOpArr[id] = !operatorArray[id];
        setOperatorArray([...newOpArr]);

        let newStyleList = buttonStyles;
        newStyleList[id] = operatorArray[id] ? styles.squerButtonSelected : styles.squerButton;
        setButtonStyles([...newStyleList]);
    }

    function submitOperatorArray(props) {
        if (!operatorArray[0] && !operatorArray[1] && !operatorArray[2] && !operatorArray[3]) {
            alert("No operator is selected.");
        }
        else {
            navigation.navigate('SinglePlayerPage', {
                operatorArray: JSON.stringify(operatorArray),
                questionCount: value
            });
        }
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
                <TeacherSvg style={styles.teacherSvg} width={120} height={120} />
            </View>
            <View style={styles.lowerViewContainer} >
                <SecondaryText type='header'>Select your operators?</SecondaryText>
                <View style={styles.buttonContainer}>
                    <View style={styles.innerButtonWrapper}>
                        <SquerBlock style={buttonStyles[0]} onPress={() => opatorBlock(0)} title='+' />
                        <SquerBlock style={buttonStyles[1]} onPress={() => opatorBlock(1)} title='-' />
                    </View>
                    <View style={styles.innerButtonWrapper}>
                        <SquerBlock style={buttonStyles[2]} onPress={() => opatorBlock(2)} title='x' />
                        <SquerBlock style={buttonStyles[3]} onPress={() => opatorBlock(3)} title='/' />
                    </View>
                    <View style={styles.innerDropdownWrapper}>
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            placeholder='Select question count'
                        />
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
        flex: 3,
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
    innerButtonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
    innerDropdownWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
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