import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function StyleCard({ 
  id,
  name, 
  type, 
  rating, 
  usage,
  imageUrl,
  isFavorite,
  onFavorite
}: {
  id: string;
  name: string;
  type: 'Avatar' | 'Video' | 'Sticker';
  rating: number;
  usage: string;
  imageUrl: string;
  isFavorite?: boolean;
  onFavorite: (id: string) => void;
}) {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{type}</Text>
        <View style={styles.stats}>
          {rating > 0 && (
            <>
              <Ionicons name="star" size={16} color="#FFD700" />
              <Text style={styles.rating}>{rating}</Text>
            </>
          )}
          <Text style={styles.usage}>{usage}</Text>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => onFavorite(id)}
        style={styles.favoriteButton}
      >
        <Ionicons 
          name={isFavorite ? 'heart' : 'heart-outline'} 
          size={24} 
          color={isFavorite ? 'red' : '#ccc'} 
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rating: {
    fontWeight: 'bold',
    marginRight: 16,
  },
  usage: {
    color: '#888',
  },
  favoriteButton: {
    padding: 8,
  },
});