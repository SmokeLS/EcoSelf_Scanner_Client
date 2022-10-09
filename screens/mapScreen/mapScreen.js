import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import LeftSideBar from './leftSideBar/leftSideBar';

function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 55.831940430012665,
          longitude: 37.554994124660666,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: 55.831940430012665,
            longitude: 37.554994124660666,
          }}
          title="ME"
          description="CODING HERE"
        />
      </MapView>
      <LeftSideBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
