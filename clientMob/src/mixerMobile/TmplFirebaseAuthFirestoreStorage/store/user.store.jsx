import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from "zustand";
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, database } from '../services/firebase';
import { doc, setDoc } from "firebase/firestore";

export const useUserStore = create((set, get) => ({
    isLoading: false,
    setLoading: (value) => set({ isLoading: value }),
    
    // Data types
    user_names: '',
    user_email: '',
    user_password: '',
    user_dateBirthday: null,
    user_genre: '',
    user_image: '',
    user_isMembresy: false,

    // Functions
    setUser_names: (value) => set({ user_names: value }),
    setUser_email: (value) => set({ user_email: value }),
    setUser_password: (value) => set({ user_password: value }),
    setUser_dateBirthday: (value) => set({ user_dateBirthday: value }),
    setUser_genre: (value) => set({ user_genre: value }),
    
    setUser_image: (value) => {
        set({ user_image: value });
        AsyncStorage.setItem('user_image', value);
    },
    loadUser_image: async () => {
        const user_image = await AsyncStorage.getItem('user_image');
        if (user_image) {
            set({ user_image });
        }
    },

    setUser_isMembresy: (value) => set({ user_isMembresy: value }),

    handleRegister: async (navigation) => {
        const { user_names, user_email, user_password, setLoading } = get();
        if (user_names && user_email && user_password) {
            setLoading(true);
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, user_email, user_password);
                const user = userCredential.user;

                await setDoc(doc(database, 'Users', user.uid), {
                    user_names: user_names,
                    user_email: user_email,
                    user_genre: '',
                    user_image: 'https://firebasestorage.googleapis.com/v0/b/mixer-63ba8.appspot.com/o/userDefault.webp?alt=media&token=0fa9fde4-d9df-42dd-8e95-8ea9f722a616',
                    user_isMembresy: false,
                    user_dateBirthday: null,
                    createdAt: new Date(),
                });
                navigation.navigate('HomeTabs');
            } catch (error) {
                Alert.alert('Error en el registro', error.message);
            } finally {
                setLoading(false);
            }
        } else {
            Alert.alert('Error', 'Completa todos los campos');
        }
    },
    handleLogout: async (navigation) => {
        try {
            await signOut(auth);
            set({
                user_names: null,
                user_email: null,
                user_password: null,
                user_dateBirthday: null,
                user_genre: null,
                user_image: '', // Limpiar la imagen del usuario
                user_isMembresy: false,
            });
            await AsyncStorage.removeItem('user_image'); // Eliminar la imagen del almacenamiento local
            navigation.reset({
                index: 0,
                routes: [{ name: 'Welcome' }],
            });
        } catch (error) {
            console.error('Error during logout:', error);
        }
    },
    

    checkFirstLaunch: async () => {
        try {
            const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
            if (isFirstLaunch === null) {
                await AsyncStorage.setItem('isFirstLaunch', 'false');
                set({ isFirstLaunch: true });
            } else {
                set({ isFirstLaunch: false });
            }
        } catch (error) {
            console.error('Error checking first launch:', error);
        }
    },
}));
