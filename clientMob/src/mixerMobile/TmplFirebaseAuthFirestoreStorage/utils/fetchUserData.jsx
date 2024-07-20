
import { doc, onSnapshot } from 'firebase/firestore';
import { database } from '../services/firebase';

const fetchUserData = (userId, {
  setUser_email,
  setUser_names,
  setUser_dateBirthday,
  setUser_genre,
  setUser_image,
  setUser_isMembresy,
  setLoading,
}) => {
  const docRef = doc(database, 'Users', userId);
  const unsubscribe = onSnapshot(docRef, docSnap => {
    if (docSnap.exists()) {
      const data = docSnap.data();
      setUser_email(data.user_email);
      setUser_names(data.user_names);
      setUser_dateBirthday(data.user_dateBirthday ? new Date(data.user_dateBirthday.seconds * 1000) : new Date());
      setUser_genre(data.user_genre);
      setUser_image(data.user_image);
      setUser_isMembresy(data.user_isMembresy);
    } else {
      console.log('No such document!');
    }
    setLoading(false);
  }, error => {
    console.error('Error fetching user data:', error);
    setLoading(false);
  });

  return unsubscribe;
};

export default fetchUserData;
