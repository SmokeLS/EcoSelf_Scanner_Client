import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { screens } from '../global/globalConstants.js';
import MapScreen from '../screens/mapScreen/mapScreen';

const Stack = createNativeStackNavigator();

function MapStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.MapScreen} component={MapScreen} />
    </Stack.Navigator>
  );
}

export default MapStack;
