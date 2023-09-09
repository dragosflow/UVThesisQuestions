import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import AllQuestionsScreen from './screens/AllQuestionsScreen';
import CategoriesMenu from './screens/CategoriesMenu';
import CategoryQuestionsScreen from './screens/CategoryQuestionScreen';
import RandomQuestionsScreen from './screens/RandomQuestionsScreen';



const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={WelcomeScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="All" component={AllQuestionsScreen} />
      <Stack.Screen name="CategoriesMenu" component={CategoriesMenu} />
      <Stack.Screen name="CategoryQuestionsScreen" component={CategoryQuestionsScreen} />
      <Stack.Screen name="RandomQuestionsScreen" component={RandomQuestionsScreen} />



    </Stack.Navigator>
  );
}