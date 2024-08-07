import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import TmplFirebaseAuthFirestoreStorage from './src/mixerMobile/TmplFirebaseAuthFirestoreStorage/TmplFirebaseAuthFirestoreStorage';
import ExlFetchDataFirebase from './src/mixerMobile/ExlFetchDataFirebase/ExlFetchDataFirebase';
import ExlFirebaseImageUser from './src/mixerMobile/ExlFirebaseImageUser/ExlFirebaseImageUser';



export default function App() {
  return (
    <View style={styles.container}>
      <TmplFirebaseAuthFirestoreStorage/>
      {/* <ExlFirebaseImageUser/> */}
      {/* <ExlFetchDataFirebase/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
});