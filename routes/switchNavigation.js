import * as React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Code from '../assets/icons/code.png';
import CodeSelected from '../assets/icons/codeSelected.png';
import Info from '../assets/icons/info.png';
import InfoSelected from '../assets/icons/infoSelected.png';
import Map from '../assets/icons/map.png';
import MapSelected from '../assets/icons/mapSelected.png';

import { screens } from '../global/globalConstants';
import infoStack from './infoStack';
import mapStack from './mapStack';
import scannerStack from './scannerStack';

const Tab = createBottomTabNavigator();

export default function SwitchNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 70 },
        }}
      >
        <Tab.Screen
          name={screens.Info}
          component={infoStack}
          options={{
            title: `${screens.Info}`,
            tabBarIcon: () => {
              return <Image style={styles.imageStyles} source={Info} />;
            },
          }}
        />

        <Tab.Screen
          name={screens.Scanner}
          component={scannerStack}
          options={{
            title: `${screens.Scanner}`,
            tabBarIcon: () => {
              return <Image style={styles.choosenImageStyles} source={CodeSelected} />;
            },
          }}
        />
        <Tab.Screen
          name={screens.Map}
          component={mapStack}
          options={{
            title: `${screens.Map}`,
            tabBarIcon: () => {
              return <Image style={styles.imageStyles} source={Map} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageStyles: {
    marginBottom: 0,
  },
  choosenImageStyles: {
    marginBottom: 40,
  },
});
