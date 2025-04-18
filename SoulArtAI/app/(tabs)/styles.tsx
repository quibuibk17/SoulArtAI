import { FlatList } from 'react-native';
import StyleCard from '@/components/StyleCard';
import { useStyles } from '@/context/StylesContext';

export default function StylesScreen() {
  const { styles, favorite } = useStyles();

  return (
    <FlatList
      data={styles}
      renderItem={({ item }) => (
        <StyleCard
          {...item}
          onFavorite={favorite}
        />
      )}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}