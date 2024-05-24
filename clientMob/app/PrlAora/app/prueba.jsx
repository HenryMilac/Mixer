import { Redirect, router, Link } from "expo-router";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Prueba() {
  return (
    <View className={'mt-20'}>
      <Text>Carrousel</Text>
      <Link href={'/homeScreen'} className=''>Inicio Usuario</Link>
    </View>
  )
}

const styles = StyleSheet.create({})