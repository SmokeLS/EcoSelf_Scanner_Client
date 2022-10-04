import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import SwitchNavigation from './routes/switchNavigation';

export default function App() {
  return <SwitchNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
