import { create } from "zustand";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useExerciseStore = create((set, get) => ({
    user_email: 'userText@gmail.com',
    imageLink: '',
    setImageLink: (value) => {
        set({ imageLink: value });
        AsyncStorage.setItem('imageLink', value);
    },
    loadImageLink: async () => {
        const imageLink = await AsyncStorage.getItem('imageLink');
        if (imageLink) {
            set({ imageLink });
        }
    },
}));
