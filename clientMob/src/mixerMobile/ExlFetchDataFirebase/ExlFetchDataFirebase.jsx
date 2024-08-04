import { StyleSheet, Text, View, ActivityIndicator, FlatList, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { database } from './services/firebase';

export default function ExlFetchDataFirebase() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newName, setNewName] = useState('');
  const [editID, setEditID] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, 'TuContaProducts'), (querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        products.push({ id: doc.id, ...doc.data() });
      });
      setData(products);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching data: ', error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleEdit = (id, currentName) => {
    setEditID(id);
    setEditName(currentName);
  };

  const handleUpdate = async () => {
    const docRef = doc(database, 'TuContaProducts', editID);
    await updateDoc(docRef, { name: editName });
    setEditID(null);
    setEditName('');
  };

  const handleDelete = async (id) => {
    const docRef = doc(database, 'TuContaProducts', id);
    await deleteDoc(docRef);
  };

  const handleAdd = async () => {
    await addDoc(collection(database, 'TuContaProducts'), { name: newName });
    setNewName('');
    setIsAdding(false);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>TuContaProducts</Text>
      {isAdding ? (
        <View>
          <TextInput
            value={newName}
            onChangeText={setNewName}
            placeholder="Enter new name"
          />
          <Button title="Add" onPress={handleAdd} />
          <Button title="Cancel" onPress={() => setIsAdding(false)} />
        </View>
      ) : (
        <Button title="Add New" onPress={() => setIsAdding(true)} />
      )}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {editID === item.id ? (
              <View>
                <TextInput
                  value={editName}
                  onChangeText={setEditName}
                  placeholder="Enter new name"
                />
                <Button title="Save" onPress={handleUpdate} />
                <Button title="Cancel" onPress={() => setEditID(null)} />
              </View>
            ) : (
              <View>
                <Text>Name: {item.name}</Text>
                <Button title="Edit" onPress={() => handleEdit(item.id, item.name)} />
                <Button title="Delete" onPress={() => handleDelete(item.id)} />
              </View>
            )}
          </View>
        )}
      />
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
  itemContainer: {
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
});
