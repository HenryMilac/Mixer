import React, { useRef } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// Store
import { useUserStore } from '../../store/user.store'
// Components
import BtnPrimary from '../buttons/BtnPrimary'




export default function FormRegister() {
    const user_names = useUserStore(state => state.user_names)
    const user_email = useUserStore(state => state.user_email)
    const user_password = useUserStore(state => state.user_password)
    
    const setUser_names = useUserStore(state => state.setUser_names)
    const setUser_email = useUserStore(state => state.setUser_email)
    const setUser_password = useUserStore(state => state.setUser_password)
    const handleRegister = useUserStore(state => state.handleRegister)
  
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
  
    
    return (
        <View>
            <TextInput 
                value={user_names}
                onChangeText={setUser_names}
                placeholder='Names' 
                style={styles.input}
                autoCapitalize='words'
                autoCompleteType='name'
                textContentType='name'
                keyboardType='default'
                returnKeyType='next'
                onSubmitEditing={() => emailInputRef.current.focus()}
            />
            <TextInput 
                ref={emailInputRef}
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


            <BtnPrimary text={'Registrarse'} onPress={handleRegister}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.3,
        borderColor: 'gray',
        padding: 5,
    },
})