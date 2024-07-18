import { Alert } from "react-native";
import { create } from "zustand";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, database } from '../services/firebase';
import { doc, setDoc } from "firebase/firestore";



export const useUserStore = create((set, get) => ({
    // Data types
    user_names: '',
    user_email: '',
    user_password: '',

    // Functions
    setUser_names: (value) => set({user_names: value}),
    setUser_email: (value) => set({user_email: value}),
    setUser_password: (value) => set({user_password: value}),



    handleRegister: async() => {
        const {user_names, user_email, user_password} = get()
        if(user_names && user_email && user_password) {
            // setLoading(true)
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, user_email, user_password)
                const user = userCredential.user

                await setDoc(doc(database, 'Users', user.uid), {
                    user_names: user_names,
                    user_email: user_email,
                    isMembresy: false,
                    createdAt: new Date(),
                    dateBirthday: new Date(),
                    genre: '',
                    image: ''
                })
            } catch(error){
                Alert.alert('Error en el registro', error.message)
            } 
            // finally {
            //     // setLoading(false)
            // }
        } else {
            Alert.alert('Error', 'Completa todos los campos')
        }
    },
    handleLogout: (navigation) => {
        console.log('Logout');
        navigation.navigate('Welcome');
    }
}))