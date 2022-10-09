import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {screens} from "../global/globalConstants";
import InfoScreen from '../screens/infoScreen/infoScreen';

const Stack = createNativeStackNavigator();

function InfoStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={screens.InfoScreen} component={InfoScreen} />
    </Stack.Navigator>
  );
}

export default InfoStack;
