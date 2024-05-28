import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ejemplo from './ejemplo/ejemplo';
import ShowIntroOnlyFirstTime from './showIntroOnlyFirstTime/showIntroOnlyFirstTime';


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen name="ShowIntroOnlyFirstTime" component={ShowIntroOnlyFirstTime} />
      <Stack.Screen name="Ejemplo" component={Ejemplo} />
    </Stack.Navigator>
  );
}