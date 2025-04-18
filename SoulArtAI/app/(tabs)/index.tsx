import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Trading Styles App</Text>
      <Link href="/(tabs)/styles" style={{ color: '#6200ee' }}>
        Browse Styles →
      </Link>
    </View>
  );
}