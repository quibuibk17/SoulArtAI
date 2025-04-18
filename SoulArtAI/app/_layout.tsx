import { Stack } from 'expo-router';
import { StylesProvider } from '@/context/StylesContext';

export default function RootLayout() {
  return (
    <StylesProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </StylesProvider>
  );
}