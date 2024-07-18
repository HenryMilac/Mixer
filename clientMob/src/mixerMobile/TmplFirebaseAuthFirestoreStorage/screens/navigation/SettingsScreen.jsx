import { StyleSheet, Text, View } from 'react-native'
import BtnPrimary from '../../components/buttons/BtnPrimary'
import React from 'react'
import { useUserStore } from '../../store/user.store'

export default function SettingsScreen({navigation}) {
  const handleLogout = useUserStore(state => state.handleLogout)

  return (
    <View>
      <Text>SettingsScreen</Text>
      <BtnPrimary text={'Cerrar Sesión'} onPress={() => handleLogout(navigation)}/>
    </View>
  )
}

const styles = StyleSheet.create({})