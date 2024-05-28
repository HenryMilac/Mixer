import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Ejemplo({navigation}) {
  return (
    <View>
      <Button
        title="Go to Show"
        onPress={() => navigation.navigate('ShowIntroOnlyFirstTime')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})