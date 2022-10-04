import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ScannerScreen from '../screens/scannerScreen/scannerScreen';

const Stack = createNativeStackNavigator();

function ScannerStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ScannerScreen" component={ScannerScreen} />
    </Stack.Navigator>
  );
}

export default ScannerStack;
