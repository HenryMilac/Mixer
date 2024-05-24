import { Redirect, router, Link } from "expo-router";
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View className={'mt-20'}>
      <Text>homess</Text>
      <Link href={'/prueba'} className=''>Prueba</Link>
      <Link href={'/'} className=''>index</Link>
    </View>
  )
}

const styles = StyleSheet.create({})