import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import infoStack from "./infoStack";
import mapStack from "./mapStack";
import scannerStack from "./scannerStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Info" component={infoStack} />
        <Tab.Screen name="Map" component={mapStack} />
        <Tab.Screen name="Scanner" component={scannerStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}