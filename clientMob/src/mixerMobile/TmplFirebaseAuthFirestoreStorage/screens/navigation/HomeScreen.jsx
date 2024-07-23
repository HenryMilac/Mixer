import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image, Appearance } from 'react-native';
import { auth } from '../../services/firebase';
import { useUserStore } from '../../store/user.store';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../../services/firebase';
import imageUser from '../../../../../assets/userDefault.webp';
import fetchUserData from '../../utils/fetchUserData';

export default function HomeScreen() {
  const {
    user_email, user_names, user_dateBirthday, user_genre, user_image, user_isMembresy,
    setUser_email, setUser_names, setUser_dateBirthday, setUser_genre, setUser_image, setUser_isMembresy,
  } = useUserStore(state => ({
    user_email: state.user_email,
    user_names: state.user_names,
    user_dateBirthday: state.user_dateBirthday,
    user_genre: state.user_genre,
    user_image: state.user_image,
    user_isMembresy: state.user_isMembresy,
    setUser_email: state.setUser_email,
    setUser_names: state.setUser_names,
    setUser_dateBirthday: state.setUser_dateBirthday,
    setUser_genre: state.setUser_genre,
    setUser_image: state.setUser_image,
    setUser_isMembresy: state.setUser_isMembresy,
  }));

  const [loading, setLoading] = useState(true);
  const colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const userUnsubscribe = fetchUserData(user.uid, {
          setUser_email,
          setUser_names,
          setUser_dateBirthday,
          setUser_genre,
          setUser_image,
          setUser_isMembresy,
          setLoading,
        });
        
        // Cargar la URL de la imagen del usuario desde Firebase Storage
        const loadImage = async () => {
          try {
            const storageRef = ref(storage, `UsersPictureProfile/${user.email}`);
            const downloadURL = await getDownloadURL(storageRef);
            setUser_image(downloadURL);
          } catch (error) {
            console.error('Error al cargar la imagen:', error);
          } finally {
            setLoading(false);
          }
        };

        loadImage();

        return () => userUnsubscribe();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#111" />
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Home</Text>
      <View style={styles.imageContainer}>
        <Image source={user_image ? { uri: user_image } : imageUser} style={styles.image} />
      </View>
      <Text style={styles.userInfo}>Email: {user_email}</Text>
      <Text style={styles.userInfo}>Nombre: {user_names}</Text>
      <Text style={styles.userInfo}>Fecha de Nacimiento: {user_dateBirthday?.toDateString()}</Text>
      <Text style={styles.userInfo}>Género: {user_genre}</Text>
      <Text style={styles.userInfo}>Membresía: {user_isMembresy ? 'Premium' : 'Free'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
});
