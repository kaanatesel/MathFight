import { StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import WelcomePage from './Pages/WelcomePage';
import SetGamePage from './Pages/SetGamePage';
import SinglePlayerPage from './Pages/SinglePlayer';
import EndGamePage from './Pages/EndGamePage';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Welcomepage'>
        <Stack.Screen
          name='Welcomepage' component={WelcomePage} />
        <Stack.Screen name='SetGamePage' component={SetGamePage} />
        <Stack.Screen name='SinglePlayerPage' component={SinglePlayerPage} />
        <Stack.Screen name='EndGamePage' component={EndGamePage} />
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
