import React from 'react';
import MapView from 'react-native-maps'

import { View } from 'react-native';
import Map from './components/Map';

const App = () =>
    (
        <View style={{ flex: 1 }}>
            <Map></Map>
        </View>
    );

    /*
    <!--MapView
                style={{ flex: 1 }}
                region={{
                    latitude: 9.932697,
                    longitude: -84.031034,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134,
                }}
                showsUserLocation
                loadingEnabled
            /-->
            */

export default App;