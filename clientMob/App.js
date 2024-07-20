import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TmplFirebaseAuthFirestoreStorage from './src/mixerMobile/TmplFirebaseAuthFirestoreStorage/TmplFirebaseAuthFirestoreStorage';
import ExlTuContaData from './src/mixerMobile/ExlTuContaData/ExlTuContaData';



export default function App() {
  return (
    <View style={styles.container}>
      <TmplFirebaseAuthFirestoreStorage/>
      {/* <ExlTuContaData/> */}
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