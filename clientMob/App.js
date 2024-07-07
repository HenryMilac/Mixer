import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PrlFirebaseLoginFbGoog from './src/mixerMobile/PrlFirebaseLoginFbGoog/PrlFirebaseLoginFbGoog';






export default function App() {
  return (
    <View style={styles.container}>
      <PrlFirebaseLoginFbGoog/>



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
