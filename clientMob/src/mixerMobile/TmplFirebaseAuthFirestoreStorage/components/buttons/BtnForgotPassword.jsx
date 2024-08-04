import { StyleSheet, TouchableOpacity, Text, View, Alert } from 'react-native'
import React from 'react'
import { useUserStore } from '../../store/user.store'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

export default function BtnForgotPassword() {
    const user_email = useUserStore(state => state.user_email)
    const handlePress = () => {
        if (user_email.trim() === '') {
            alert('Por favor, ingresa un correo electrónico válido.');
            return;
          }
          const auth = getAuth();
          sendPasswordResetEmail(auth, user_email)
            .then(() => {
              alert('Correo de restablecimiento enviado');
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.error('Error al enviar el correo de restablecimiento:', errorCode, errorMessage);
              alert('Error al enviar el correo de restablecimiento: ' + errorMessage);
            });
        };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.forgotPasswordContainer}>Forgot Password?</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    forgotPasswordContainer: {
        textAlign: 'center',
    }
})