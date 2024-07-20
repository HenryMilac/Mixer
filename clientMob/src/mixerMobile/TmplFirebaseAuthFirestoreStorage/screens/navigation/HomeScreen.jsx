import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUserStore } from '../../store/user.store'

export default function HomeScreen() {
  const user_names = useUserStore(state => state.user_names);
  const user_isMembresy = useUserStore(state => state.user_isMembresy);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>User Names: {user_names}</Text>
      <Text>Membership: {user_isMembresy ? 'Premium' : 'Free'}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
})
