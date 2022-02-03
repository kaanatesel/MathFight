import { Button, Image, StyleSheet, Text, View } from "react-native";

import WelcomeIcon from '../assets/undraw_mathematics.svg';

import Svg from 'react-native-svg';

// <Button onPress={() => navigation.navigate('SetGamePage')} title="go to set game page" />
function WelcomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imgWrapper}>
                <WelcomeIcon width={200} height={200} />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={() => navigation.navigate('SetGamePage')} title="go to set game page" />
                    <Button onPress={() => navigation.navigate('SetGamePage')} title="go to set game page" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#201F3D'
    },
    imgWrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        padding: 20,
        flex: 1.25,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    buttonWrapper: {
        flex: 1,
        justifyContent: 'space-evenly'
    }
});


export default WelcomePage;