// ./services/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

let app;
let database;
let storage;
let auth;

if (!getApps().length) {
  const firebaseConfig = {
    apiKey: Constants.expoConfig.extra.apiKey,
    authDomain: Constants.expoConfig.extra.authDomain,
    projectId: Constants.expoConfig.extra.projectId,
    storageBucket: Constants.expoConfig.extra.storageBucket,
    messagingSenderId: Constants.expoConfig.extra.messagingSenderId,
    appId: Constants.expoConfig.extra.appId,
    databaseURL: Constants.expoConfig.extra.databaseURL,
  };

  // Initialize Firebase
  app = initializeApp(firebaseConfig);
  database = getFirestore(app);
  storage = getStorage(app);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} else {
  app = getApps()[0];
  database = getFirestore(app);
  storage = getStorage(app);
  auth = getAuth(app);
}

export { app, auth, database, storage };
