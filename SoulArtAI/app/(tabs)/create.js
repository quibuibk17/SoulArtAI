import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function CreateScreen() {
  const router = useRouter();
  const { title, image, rating, views, type } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create: {title}</Text>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.info}>Type: {type}</Text>
      <Text style={styles.info}>Rating: ⭐ {rating}</Text>
      <Text style={styles.info}>Views: ✨ {views}</Text>

      <TouchableOpacity onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 200, height: 200, borderRadius: 16, marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 10 },
  button: { marginTop: 20, padding: 10 },
  buttonText: { color: 'purple', fontSize: 16 },
});
