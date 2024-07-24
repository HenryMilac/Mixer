
import React, { useEffect, useRef, useState } from 'react'
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';


import { useUserStore } from '../../store/user.store';
import { auth, database } from '../../services/firebase';
import BtnPrimary from '../../components/buttons/BtnPrimary';


export default function FormLogin() {

    const setUser_names = useUserStore(state => state.setUser_names);
    const setUser_dateBirthday = useUserStore(state => state.setUser_dateBirthday);
    const setUser_genre = useUserStore(state => state.setUser_genre);
    const setUser_image = useUserStore(state => state.setUser_image);
    const setUser_isMembresy = useUserStore(state => state.setUser_isMembresy);

    const user_email = useUserStore(state => state.user_email);
    const user_password = useUserStore(state => state.user_password);
    const setUser_email = useUserStore(state => state.setUser_email);
    const setUser_password = useUserStore(state => state.setUser_password);
    const [loading, setLoading] = useState(false);
    
    const passwordInputRef = useRef(null);
    
    const navigation = useNavigation();

    // Limpiar inputs cuando retrocedes
    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            setUser_email('')
            setUser_password('')
            setUser_names('')
        })
        return unsubscribe;
        // Question: Por que cuando estoy en register, y voy a login tambien aplica para names, cuando esto solo es de login y no de register
    }, [navigation, setUser_email, setUser_password, setUser_names]);

    const onLoginPress = async () => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, user_email, user_password);
            const user = userCredential.user;

            // Fetch user data from Firestore
            const docRef = doc(database, 'Users', user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                setUser_names(data.user_names);
                setUser_dateBirthday(data.user_dateBirthday ? new Date(data.user_dateBirthday.seconds * 1000) : null);
                setUser_genre(data.user_genre);
                setUser_image(data.user_image);
                setUser_isMembresy(data.user_isMembresy);
            }

            navigation.navigate('HomeTabs');
        } catch (error) {
            Alert.alert('Error en el inicio de sesión', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View>
            <TextInput 
                value={user_email}
                onChangeText={setUser_email}
                placeholder='Email' 
                style={styles.input}
                autoCapitalize='none'
                autoCompleteType='email'
                textContentType='emailAddress'
                keyboardType='email-address'
                returnKeyType='next'
                onSubmitEditing={() => passwordInputRef.current.focus()}
            />
            <TextInput
                ref={passwordInputRef}
                value={user_password}
                onChangeText={setUser_password}
                placeholder='Password' 
                style={styles.input}
                autoCapitalize='none'
                autoCompleteType='password'
                textContentType='password'
                secureTextEntry
                returnKeyType='done'
            />

            <BtnPrimary text={loading ? <ActivityIndicator color="#111" /> : 'Iniciar Sesión'} onPress={onLoginPress} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.3,
        borderColor: 'gray',
        padding: 5,
    },
});
