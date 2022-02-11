import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import GlobalStyles from "../Components/GlobalStyles";
import backButtonIcon from "../assets/arrow-back-icon.png";
import TeacherSvg from '../assets/undraw_teacher_re_sico.svg';
import SquerBlock from "../Components/SquerBlock";
import MathFightText from "../Components/MathFightText";


function SinglePlayerPage({ route, navigation }) {
    //const { operatorArray } = route.params;
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
                        <SquerBlock onPress={() => alert('blk')} title='4' />
                        <SquerBlock onPress={() => alert('blk')} title='5' />
                    </View>
                    <View style={styles.innnerButtonWrapper}>
                        <SquerBlock onPress={() => alert('blk')} title='14' />
                        <SquerBlock onPress={() => alert('blk')} title='4' />
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
});


export default SinglePlayerPage;
