import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';

export default function SectLoading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
      <Text>Cargando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
