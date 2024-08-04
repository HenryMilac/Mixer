import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from './services/firebase';

import * as ImagePicker from 'expo-image-picker';

import { useExerciseStore } from './store/exercise.store';
import userImage from '../../../assets/userDefault.webp'



export default function ExlFirebaseImageUser() {
  const [progress, setProgress] = useState(0);
  const user_email = useExerciseStore(state => state.user_email)
  const imageLink = useExerciseStore(state => state.imageLink)
  const setImageLink = useExerciseStore(state => state.setImageLink)
  const loadImageLink = useExerciseStore(state => state.loadImageLink);


  useEffect(() => {
    loadImageLink();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      // Calidad de Imagen usuario sube foto 0 baja, 1 alta
      quality: 0,
    });
    if (!result.canceled) {
      const {uri} = result.assets[0]
      // uri: result.assets[0].uri, hay tipos: image, video, audio, document, file
      // Usar el tipo de archivo (image, video, etc.) cuando necesites clasificar, filtrar, o manejar archivos de manera diferenciada en tu aplicación.
      // No usar el tipo de archivo cuando trabajes con un solo tipo de archivo y no necesites clasificación adicional.
      // await uploadImage(result.assets[0].uri, "image");
      await uploadImage(uri)
    }
  };
  

  async function uploadImage(uri, fileType) {
    //Tienen que ir separados, porque fetch retorna una promesa que resuelve a un objeto Response. Primero necesitas esperar a que la promesa se resuelva para obtener el objeto Response, y luego puedes llamar al método blob() en ese objeto.
    // fetch(uri) hace solicitud http para obtener imagen en binario (uri)
    const response = await fetch(uri);
    // blob => object{} para que js pueda manipularlo o subirlos a donde quieras
    const blob = await response.blob();


    // Firebase
    // ref() es funcion de firebase, se usa para crear referencia a una ubicación específica en Storage
    // Es vez de esa fecha puedo ponerle cualquier nombre que quiera ejem: file.name
    //Question: Como hago si quiero que en el caso de que solo quiero que haya una imagen y siempre se reemplaze por la nueva, caso de usuario, solo tiene una foto de perfil
    const storageRef = ref(storage, `UsersPictureProfile/${user_email}`);
    // función de firebase, inicia carga de archivo a Storage (carpeta en storage / imagen)
    const uploadTask = uploadBytesResumable(storageRef, blob);


    // .on es de Firebase, Escucha y responde a eventos durante el proceso de carga de un archivo.
    // Permite agregar funciones (Ejemplo: progreso (snapshot), error, completado (getDownloadURL))
    // Se usa para monitorear el progreso de carga ("state_changed"), manejo de errores durante carga, hacer acciones cuando carga is done
    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        setProgress(progress.toFixed(0));
      },
      (error) => {
        console.error('Upload failed:', error);
        Alert.alert('Error', 'Hubo un problema al subir la imagen.');
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("File available at", downloadURL);
        setImageLink(downloadURL);
        Alert.alert('Éxito', 'Imagen de perfil actualizada.');
      }
    );
  }


  return (
    <View>
      {progress > 0 && progress < 100 ? (
        <Text>{progress}%</Text>
      ) : (
        <Image
          source={imageLink ? { uri: imageLink } : userImage}
          style={{ width: 300, height: 300 }}
        />
      )}
      <TouchableOpacity onPress={pickImage}>
        <Text>Editar foto</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({}); 