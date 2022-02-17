import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import GlobalStyles from "../Components/GlobalStyles";
import backButtonIcon from "../assets/arrow-back-icon.png";
import TeacherSvg from '../assets/undraw_teacher_re_sico.svg';
import SquerBlock from "../Components/SquerBlock";
import MathFightText from "../Components/MathFightText";
import SecondaryText from "../Components/SecondaryText";
import CountDown from "react-native-countdown-component";
import { useState } from "react";




function SinglePlayerPage({ route, navigation }) {
    //const { operatorArray, questionCount } = route.params;

    const [activeQuestion, setActiveQuestion] = useState(null);

    function createMultiplicaiton() {
        const min = 1;
        const max = 10;
        //Create 2 random numbers for sum operation
        const operand1 = Math.floor(min + Math.random() * (max - min));
        const operand2 = Math.floor(min + Math.random() * (max - min));

        const correctAns = operand1 * operand2; // this is also a index for numberArray

        generateChoices(correctAns, operand1, operand2, 10, 10, 'x');
    }

    function createExtractionQuestion() {
        const min = 1;
        const max = 20;
        //Create 2 random numbers for sum operation
        const smallerOperand = Math.floor(min + Math.random() * (max - min));
        const biggerOperand = Math.floor(smallerOperand + Math.random() * (max - smallerOperand));

        const correctAns = biggerOperand - smallerOperand; // this is also a index for numberArray

        generateChoices(correctAns, biggerOperand, smallerOperand, 6, 6, '-');
    }

    function createSumQuestion() {
        const min = 1;
        const max = 20;
        //Create 2 random numbers for sum operation
        const operand1 = Math.floor(min + Math.random() * (max - min));
        const operand2 = Math.floor(min + Math.random() * (max - min));
        const correctAns = operand1 + operand2; // this is also a index for numberArray

        generateChoices(correctAns, operand1, operand2, 6, 6, '+');
    }

    function generateChoices(answer, operand1, operand2, choicesLowerBound, choicesUpperBound, operator) {
        let numberArray = Array.from(Array(40).keys()); // creata an answer array 
        let ansIndexArray = [0, 1, 2, 3]; // create and answer index array

        numberArray.splice(answer, 1);

        let minAnsIndex = answer - choicesLowerBound;
        let maxAnsIndex = answer + choicesUpperBound;

        let ans1 = Math.floor(minAnsIndex + Math.random() * (maxAnsIndex - minAnsIndex));
        ans1 = (ans1 < 0) ? 0 : ans1; //check boundaries
        ans1 = (ans1 >= numberArray.length) ? (numberArray.length - 1) : ans1;
        const ans1Val = numberArray[ans1];
        numberArray.splice((ans1 === 0) ? ans1 : ans1, 1);

        let ans2 = Math.floor(minAnsIndex + Math.random() * (maxAnsIndex - minAnsIndex));
        ans2 = (ans2 < 0) ? 0 : ans2; //check boundaries
        ans2 = (ans2 >= numberArray.length) ? (numberArray.length - 1) : ans2;
        const ans2Val = numberArray[ans2];
        numberArray.splice((ans2 === 0) ? ans2 : ans2, 1);

        let ans3 = Math.floor(minAnsIndex + Math.random() * (maxAnsIndex - minAnsIndex));
        ans3 = (ans3 < 0) ? 0 : ans3; //check boundaries
        ans3 = (ans3 >= numberArray.length) ? (numberArray.length - 1) : ans3;
        const ans3Val = numberArray[ans3];


        const correctAnsIndex = Math.floor(0 + Math.random() * (ansIndexArray.length - 0));
        ansIndexArray.splice(correctAnsIndex, 1);

        const ans1ChoiceIndex = Math.floor(0 + Math.random() * (ansIndexArray.length - 0));
        const ans1ChoiseVal = ansIndexArray[ans1ChoiceIndex];
        ansIndexArray.splice(ans1ChoiceIndex, 1);

        const ans2ChoiceIndex = Math.floor(0 + Math.random() * (ansIndexArray.length - 0));
        const ans2ChoiseVal = ansIndexArray[ans2ChoiceIndex];
        ansIndexArray.splice(ans2ChoiceIndex, 1);

        const ans3ChoiseVal = ansIndexArray[0];

        const answers = Array(4);
        answers[correctAnsIndex] = `_C${answer}_`;
        answers[ans1ChoiseVal] = `w${ans1Val}`;
        answers[ans2ChoiseVal] = `w${ans2Val}`;
        answers[ans3ChoiseVal] = `w${ans3Val}`;

        console.log(
            `${operand1} ${operator} ${operand2} = [ ${answers} ]`
        );
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
                    <CountDown
                        until={10}

                        size={30}
                        timeToShow={['M', 'S']}
                        digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#F0D654' }}
                        timeLabelStyle={{ color: '#F0D654', fontWeight: 'bold' }}
                        separatorStyle={{ color: '#F0D654' }}
                        timeToShow={['M', 'S']}
                        digitTxtStyle={{ color: '#F0D654' }}
                    />
                </View>
            </View>
            <View style={styles.lowerViewContainer} >
                <View style={styles.questionText}>
                    <SecondaryText type='header'>4 + 5</SecondaryText>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.innnerButtonWrapper}>
                        <SquerBlock onPress={() => createSumQuestion()} title='sum' />
                        <SquerBlock onPress={() => createExtractionQuestion()} title='extractiom' />
                    </View>
                    <View style={styles.innnerButtonWrapper}>
                        <SquerBlock onPress={() => createMultiplicaiton()} title='Mutip' />
                        <SquerBlock onPress={() => createSumQuestion()} title='4' />
                    </View>
                </View>
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
    teacherSvg: {
        flex: 1
    },
    backButon: {
        flex: 1,
        width: 'auto'
    },
    lowerViewContainer: {
        flex: 2,
        alignItems: 'center',
        paddingBottom: 20
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
    questionText: {
        width: '80%',
        backgroundColor: '#535266',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    }
});


export default SinglePlayerPage;
