import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export default function BtnPrimary({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 0.3,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
