import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/authentication/LoginScreen';
import RegisterScreen from './screens/authentication/RegisterScreen';
import HomeScreen from './screens/navigation/HomeScreen';
import SettingsScreen from './screens/navigation/SettingsScreen';
import { useUserStore } from './store/user.store';
import SectLoading from './components/sections/SectLoading';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="SettingsTab" component={SettingsScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function TmplFirebaseAuthFirestoreStorage() {
  const [isLoading, setIsLoading] = useState(true);
  const { isFirstLaunch, checkFirstLaunch } = useUserStore();

  useEffect(() => {
    const init = async () => {
      await checkFirstLaunch();
      setIsLoading(false);
    };
    init();
  }, []);

  if (isLoading) {
    return <SectLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirstLaunch ? 'Welcome' : 'HomeTabs'}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
