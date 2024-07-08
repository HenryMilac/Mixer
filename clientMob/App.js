import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrlFirebaseAuthAll from './src/mixerMobile/PrlFirebaseLoginFbGoog/PrlFirebaseAuthAll';







export default function App() {
  return (
    <View style={styles.container}>
      <PrlFirebaseAuthAll/>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
});
