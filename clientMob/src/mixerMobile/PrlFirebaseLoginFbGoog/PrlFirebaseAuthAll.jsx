// Authentication with Email, Facebook, Google, Change Password

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import ChangePasswordScreen from './screens/ChangePasswordScreen'

const Stack = createNativeStackNavigator();


export default function PrlFirebaseAuthAll() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}/>
        <Stack.Screen name='ChangePassword' component={ChangePasswordScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})