import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import WelcomePage from './Pages/WelcomePage';
import SetGamePage from './Pages/SetGamePage';
import SinglePlayerPage from './Pages/SinglePlayer';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='SetGamePage'>
        <Stack.Screen
          name='Welcomepage' component={WelcomePage} />
        <Stack.Screen name='SetGamePage' component={SetGamePage} />
        <Stack.Screen name='SinglePlayerPage' component={SinglePlayerPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
