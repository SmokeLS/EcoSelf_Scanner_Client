import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapScreen from '../screens/mapScreen/mapScreen';

const Stack = createNativeStackNavigator();

function MapStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default MapStack;
