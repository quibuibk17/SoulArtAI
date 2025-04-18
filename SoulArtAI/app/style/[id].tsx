import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useStyles } from '@/context/StylesContext';

export default function StyleDetail() {
  const { id } = useLocalSearchParams();
  const { styles } = useStyles();
  const style = styles.find(s => s.id === id);

  if (!style) return <Text>Style not found</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Image 
        source={{ uri: style.imageUrl }} 
        style={{ width: '100%', height: 300, borderRadius: 8 }} 
      />
      <Text style={{ fontSize: 24, marginTop: 16 }}>{style.name}</Text>
      <Text>Type: {style.type}</Text>
      <Text>Rating: {style.rating}/5</Text>
      <Text>Used by: {style.usage} users</Text>
    </View>
  );
}