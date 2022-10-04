import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InfoScreen from "../screens/infoScreen/infoScreen";

const Stack = createNativeStackNavigator();

function InfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="InfoScreen" component={InfoScreen} />
    </Stack.Navigator>
  );
}

export default InfoStack; 
