import BtnPrimary from '../../components/buttons/BtnPrimary';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TextInput, TouchableOpacity, Image, Modal, Alert, Appearance } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { auth, database, storage } from '../../services/firebase';
import { useUserStore } from '../../store/user.store';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as ImagePicker from 'expo-image-picker';
import imageUser from '../../../../../assets/userDefault.webp';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import fetchUserData from '../../utils/fetchUserData';
import { doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { handleEdit } from '../../utils/auth';



const RegistrationModal = ({ visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Regístrate para poder editar tus datos.</Text>
        </View>
      </View>
    </Modal>
  );
};

export default function SettingsScreen({ navigation }) {
  const [uploading, setUploading] = useState(false);

  const [progress, setProgress] = useState(0);
  const [loadingImage, setLoadingImage] = useState(true);
  const {
    user_email, user_names, user_dateBirthday, user_genre, user_image, user_isMembresy,
    setUser_email, setUser_names, setUser_dateBirthday, setUser_genre, setUser_image, setUser_isMembresy, handleLogout, loadUser_image
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
    handleLogout: state.handleLogout,
    loadUser_image: state.loadUser_image
  }));

  const [loading, setLoading] = useState(true);
  const [updatingDate, setUpdatingDate] = useState(false);
  const [updatingGenre, setUpdatingGenre] = useState(false);
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isGenrePickerVisible, setGenrePickerVisibility] = useState(false);
  const [selectedGender, setSelectedGender] = useState(user_genre);
  const [isDateModalVisible, setDateModalVisibility] = useState(false);
  const [isGenreModalVisible, setGenreModalVisibility] = useState(false);
  const [isProfileModalVisible, setProfileModalVisibility] = useState(false);
  const [isRegistrationModalVisible, setRegistrationModalVisible] = useState(false);

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
          setLoadingImage(false);
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


  useEffect(() => {
    loadUser_image();
  }, []);

  const pickImage = async () => {
    if (!user_email) {
      setRegistrationModalVisible(true);
      return;
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0,
    });
  
    if (!result.canceled) {
      const { uri } = result.assets[0];
      await uploadImage(uri);
    }
  };
  async function uploadImage(uri) {
    const response = await fetch(uri);
    const blob = await response.blob();
  
    const storageRef = ref(storage, `UsersPictureProfile/${user_email}`);
    const uploadTask = uploadBytesResumable(storageRef, blob);
  
    setUploading(true);
  
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed(0));
      },
      (error) => {
        console.error('Upload failed:', error);
        Alert.alert('Error', 'Hubo un problema al subir la imagen.');
        setUploading(false);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("File available at", downloadURL);
        setUser_image(downloadURL);
        Alert.alert('Éxito', 'Imagen de perfil actualizada.');
        setUploading(false); 
      }
    );
  }
  

const handleUpdateProfile = async () => {
  if (!user_email) {
      setRegistrationModalVisible(true);
      return;
  }
  setUpdatingProfile(true);
  try {
    const user = auth.currentUser;
    if (user) {
      const docRef = doc(database, 'Users', user.uid);
      await updateDoc(docRef, {
        user_names,
        user_dateBirthday,
        user_genre,
        user_image,
        user_isMembresy,
      });
      loadUser_image(); 
      setProfileModalVisibility(true);
      setTimeout(() => setProfileModalVisibility(false), 2000);
    }
  } catch (error) {
    Alert.alert('Error', 'Hubo un problema al actualizar tu información.');
    console.error('Error updating user data:', error);
  } finally {
    setUpdatingProfile(false);
  }
};


  const showDatePicker = () => {
    if (!user_email) {
      setRegistrationModalVisible(true);
      return;
    }
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = async (date) => {
    setUpdatingDate(true);
    setUser_dateBirthday(date);
    setDatePickerVisibility(false);
    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(database, 'Users', user.uid);
        await updateDoc(userDocRef, {
          user_dateBirthday: date,
        });
        setDateModalVisibility(true);
        setTimeout(() => setDateModalVisibility(false), 2000);
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al actualizar tu fecha de nacimiento.');
      console.error('Error al actualizar fecha de nacimiento:', error);
    } finally {
      setUpdatingDate(false);
    }
  };

  const toggleGenrePicker = () => {
    if (!user_email) {
      setRegistrationModalVisible(true);
      return;
    }
    setGenrePickerVisibility(!isGenrePickerVisible);
  };

  const handleGenreChange = async () => {
    setUpdatingGenre(true);
    setUser_genre(selectedGender);
    try {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(database, 'Users', user.uid);
        await updateDoc(userDocRef, {
          user_genre: selectedGender,
        });
        setGenreModalVisibility(true);
        setTimeout(() => setGenreModalVisibility(false), 2000);
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al actualizar tu género.');
      console.error('Error al actualizar género:', error);
    } finally {
      setUpdatingGenre(false);
      setGenrePickerVisibility(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#111" />
        <Text>Cargando...</Text>
      </View>
    );
  }



  
return (
  <View>
    {/* Image */}
    <View>
      {uploading ? (
        <Text>{progress}%</Text>
      ) : (
        <Image
          source={loadingImage ? imageUser : (user_image ? { uri: user_image } : imageUser)}
          style={{ width: 200, height: 200 }}
        />
      )}
      <TouchableOpacity onPress={pickImage}>
        <Text>Editar foto</Text>
      </TouchableOpacity>
    </View>





    {/* Email */}
    <Text>{user_email}</Text>

    {/* Names */}
    <TextInput
      style={styles.input}
      value={user_names}
      onChangeText={text => {
        if (!user_email) {
          setRegistrationModalVisible(true);
          return;
        }
        setUser_names(text);
      }}
      placeholder="User Names"
      editable={!!user_email}
    />




    {/* Birthday */}
    <View>
      <View style={styles.datePickerContainer}>
        <Text>Fecha de Nacimiento:</Text>
        <TouchableOpacity onPress={showDatePicker} style={styles.editButton}>
          {updatingDate ? (
            <ActivityIndicator size="small" color="#000" />
          ) : (
            <Text>{user_dateBirthday?.toDateString() ?? 'Seleccionar fecha'}</Text>
          )}
          <FontAwesome name="angle-down" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={user_dateBirthday}
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
        textColor={colorScheme === 'dark' ? 'white' : 'black'}
      />
      <Modal
        transparent={true}
        animationType="fade"
        visible={isDateModalVisible}
        onRequestClose={() => setDateModalVisibility(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Fecha actualizada</Text>
          </View>
        </View>
      </Modal>
    </View>






    {/* Género */}
    <View>
      <View style={styles.genderPickerContainer}>
        <Text>Género:</Text>
        <TouchableOpacity onPress={toggleGenrePicker} style={styles.editButton}>
          <Text>{user_genre || 'Escoger'}</Text>
          <FontAwesome name="angle-down" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {isGenrePickerVisible && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isGenrePickerVisible}
          onRequestClose={() => setGenrePickerVisibility(false)}
        >
          <View style={styles.modalContainerBottom}>
            <View style={styles.pickerContainerConfirm}>
              <Picker
                selectedValue={selectedGender}
                onValueChange={(itemValue) => setSelectedGender(itemValue)}
                style={[styles.picker, { color: colorScheme === 'dark' ? 'white' : 'black' }]}
                itemStyle={{ backgroundColor: colorScheme === 'dark' ? '#333' : '#fff' }}
              >
                <Picker.Item label="-- Seleccionar --" value="Escoger" />
                <Picker.Item label="Masculino" value="Masculino" />
                <Picker.Item label="Femenino" value="Femenino" />
              </Picker>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleGenreChange}
              >
                {updatingGenre ? (
                  <ActivityIndicator size="small" color="#003102" />
                ) : (
                  <Text style={styles.buttonStyle}>Confirmar</Text>
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => setGenrePickerVisibility(false)}
            >
              <Text style={styles.buttonStyle}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}

      <Modal
        transparent={true}
        animationType="fade"
        visible={isGenreModalVisible}
        onRequestClose={() => setGenreModalVisibility(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Género actualizado</Text>
          </View>
        </View>
      </Modal>
    </View>






    {/* Membresia */}
    <Text>Membership: {user_isMembresy ? 'Premium' : 'Free'}</Text>







    {/* Editar */}
      <BtnPrimary
        text={'Editar Datos'}
        onPress={handleEdit}
      />


    <TouchableOpacity
      onPress={() => {
        if (!user_email) {
          setRegistrationModalVisible(true);
        } else {
          handleUpdateProfile();
        }
      }}
      style={[
        styles.dynamicButton,
        !user_email ? styles.redButton : styles.greenButton
      ]}
    >
      {updatingProfile ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.buttonText}>Editar Datos</Text>
      )}
    </TouchableOpacity>

    <Modal
      transparent={true}
      animationType="fade"
      visible={isProfileModalVisible}
      onRequestClose={() => setProfileModalVisibility(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Datos actualizados</Text>
        </View>
      </View>
    </Modal>







    {/* Cerrar Sesion */}
    <BtnPrimary
      text={user_email ? 'Cerrar Sesión' : 'Registrarse'}
      onPress={() => handleLogout(navigation)}
    />

    {/* Registration Modal */}
    <RegistrationModal
      visible={isRegistrationModalVisible}
      onClose={() => setRegistrationModalVisible(false)}
    />
  </View>
);
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0.3,
    borderColor: 'gray',
    width: '100%',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalContainerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingBottom: 20,
  },
  modalCloseButton: {
    color: 'blue',
    marginTop: 20,
  },
  pickerContainerConfirm: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    width: '95%',
    alignItems: 'center',
    marginBottom: 10,
  },
  picker: {
    width: '100%',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    width: '95%',
    padding: 15,
    alignItems: 'center',
  },
  buttonStyle: {
    color: '#3199F3',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  dynamicButton: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  redButton: {
    backgroundColor: 'red',
  },
  greenButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});