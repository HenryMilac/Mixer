import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// Components
import FormRegister from '../../components/forms/FormRegister'
import SectSwitchLoginRegisterForm from '../../components/sections/SectSwitchLoginRegisterForm'





export default function RegisterScreen() {
  return (
    <View>
      <SafeAreaView>
        <FormRegister/>
        <SectSwitchLoginRegisterForm textMessage={'Ya tienes cuenta?'} textLink={'Iniciar Sesión'} link={'Login'}/>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({})