import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AllQuestionsScreen from './screens/AllQuestionsScreen';



const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="All" component={AllQuestionsScreen} />

    </Stack.Navigator>
  );
}