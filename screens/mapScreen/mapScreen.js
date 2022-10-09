import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import Battery from '../../assets/icons/mapIcons/battery.png';
import Glass from '../../assets/icons/mapIcons/glass.png';
import Tin from '../../assets/icons/mapIcons/tin.png';
import Paper from '../../assets/icons/mapIcons/paper.png';
import Plastic from '../../assets/icons/mapIcons/plastic.png';
// import Marker from '../../assets/icons/mapIcons/marker.png';
import More from '../../assets/icons/mapIcons/more.png';

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
      <View style={styles.leftSideBar}>
        <View style={styles.viewImage}>
          <Image style={styles.imageStyles} source={Battery} />
        </View>
        <View style={styles.viewImage}>
          <Image style={styles.imageStyles} source={Glass} />
        </View>
        <View style={styles.viewImage}>
          <Image style={styles.imageStyles} source={Paper} />
        </View>
        <View style={styles.viewImage} >
          <Image style={styles.imageStyles} source={More} />
        </View>
      </View>
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
  leftSideBar: {
    width: 60,
    height: 250,
    position: 'absolute',
    top: 30,
    left: 10,
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 50,
    backgroundColor: '#fff',
    paddingBottom: 25,
    paddingTop: 25,
  },
  viewImage: {
    width: '100%',
    position: "relative",
    paddingLeft: 5, 
    paddingRight: 5,
  },
  imageStyles: {
    width: "100%",
    resizeMode: 'contain',
    position: 'relative',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default MapScreen;
