import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen({navigation}) {
  return (
    <View>
      <View>
        <Text>Información de la App</Text>
      </View>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Crear Cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Invitado</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})