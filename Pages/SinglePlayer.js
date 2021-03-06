import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import GlobalStyles from "../Components/GlobalStyles";
import backButtonIcon from "../assets/arrow-back-icon.png";
import TeacherSvg from '../assets/undraw_teacher_re_sico.svg';
import SquerBlock from "../Components/SquerBlock";
import MathFightText from "../Components/MathFightText";
import SecondaryText from "../Components/SecondaryText";
import CountDown from "react-native-countdown-component";
import { useEffect, useState } from "react";

function SinglePlayerPage({ route, navigation }) {
    const { operatorString, questionCount } = route.params;

    const [choiceOne, setChoiceOne] = useState(0);
    const [choiceTwo, setChoiceTwo] = useState(0);
    const [choiceTree, setChoiceTree] = useState(0);
    const [choiceFour, setChoiceFour] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState(0);

    const [askedQuestions, setAskedQuesitons] = useState(1);

    const [answerArray, setAnswerArray] = useState([]);

    const [question, setQuestion] = useState('x + x = ?');

    const [correctAnsCount, setCorrectAnsCount] = useState(0);

    useEffect(() => {
        randomQuestion();
    }, [])

    function randomQuestion() {
        const randomIndex = Math.floor(0 + Math.random() * ((operatorString.length) - 0));

        if (operatorString[randomIndex] === '+') {
            createSumQuestion();
        }

        if (operatorString[randomIndex] === '-') {
            createExtractionQuestion();
        }

        if (operatorString[randomIndex] === 'x') {
            createMultiplicaitonQuestion();
        }

        if (operatorString[randomIndex] === '/') {
            createDivisionQuestion();
        }
    }

    function createDivisionQuestion() {
        const min = 1;
        const max = 40;
        const dividen = Math.floor(min + Math.random() * (max - min));

        var divisorsList = [];
        var divisors = (n) => [...Array(n + 1).keys()].slice(1)
            .reduce((s, a) => {
                var divisor = !(n % a) && a;
                if (divisor) divisorsList.push(divisor);
                return s + divisor;
            }, 0);


        divisors(dividen);

        const deviderIndex = Math.floor(1 + Math.random() * ((divisorsList.length - 1) - 1));
        const divider = divisorsList[deviderIndex];

        const answer = dividen / divider;

        generateChoices(answer, dividen, divider, 5, 5, '/');
    }

    function createMultiplicaitonQuestion() {
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
        let numberArray = Array.from(Array(100).keys()); // creata an answer array 
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
        answers[correctAnsIndex] = answer;
        answers[ans1ChoiseVal] = ans1Val;
        answers[ans2ChoiseVal] = ans2Val;
        answers[ans3ChoiseVal] = ans3Val;

        setChoiceOne(answers[0]);
        setChoiceTwo(answers[1]);
        setChoiceTree(answers[2]);
        setChoiceFour(answers[3]);

        setCorrectAnswer(answer);

        setQuestion(`${operand1} ${operator} ${operand2} = ?`);
    }


    function checkAnswer(value) {
        let arr = answerArray;
        if (value === correctAnswer) {
            arr.push(true);
            setCorrectAnsCount(correctAnsCount + 1);
        }
        else {
            arr.push(false)
        }

        setAnswerArray([...arr]);

        if (askedQuestions === parseInt(questionCount)) {
            navigation.navigate('EndGamePage', {
                answerArray: JSON.stringify(answerArray),
                trueCount: correctAnsCount
            });
        }
        else {
            setAskedQuesitons(askedQuestions + 1);
            randomQuestion();
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
                    <SecondaryText type='header'>{question}</SecondaryText>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.innnerButtonWrapper}>
                        <SquerBlock onPress={() => checkAnswer(choiceOne)} title={choiceOne} />
                        <SquerBlock onPress={() => checkAnswer(choiceTwo)} title={choiceTwo} />
                    </View>
                    <View style={styles.innnerButtonWrapper}>
                        <SquerBlock onPress={() => checkAnswer(choiceTree)} title={choiceTree} />
                        <SquerBlock onPress={() => checkAnswer(choiceFour)} title={choiceFour} />
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
