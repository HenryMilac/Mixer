import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/authentication/LoginScreen'
import RegisterScreen from './screens/authentication/RegisterScreen'
import HomeScreen from './screens/navigation/HomeScreen'
import SettingsScreen from './screens/navigation/SettingsScreen'
import ChangePasswordScreen from './screens/authentication/ChangePasswordScreen'

const Stack = createNativeStackNavigator();


export default function TmplFirebaseAuthFirestoreStorage() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }}/>

        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='ChangePassword' component={ChangePasswordScreen} options={{ headerShown: false }}/>

        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name='Settings' component={SettingsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})