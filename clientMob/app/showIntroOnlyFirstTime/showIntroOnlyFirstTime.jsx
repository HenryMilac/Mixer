import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ShowIntroOnlyFirstTime({navigation}) {
  return (
    <View>
      <Button
        title="Go to Ejemplo"
        onPress={() => navigation.navigate('Ejemplo')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})