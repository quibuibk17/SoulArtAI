// For Firebase
import firestore from '@react-native-firebase/firestore';

export const fetchStyles = async () => {
  const snapshot = await firestore().collection('styles').get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// OR For REST API
export const fetchStyles = async () => {
  const response = await fetch('https://your-api.com/styles');
  return await response.json();
};