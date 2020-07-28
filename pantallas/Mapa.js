import React from 'react';
import {Text, Container, Header, Body, Content} from 'native-base';
import LogoImage from '../img/LogoImage';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
export default class Mapa extends React.Component {
    render() {
        return (
            <>
            <Header style ={{backgroundColor: '#00B18F', height: 60}} >
                <Body>
                <LogoImage />
                </Body>
            </Header>
            <Content>
                <MapView  
                style={styles.mapStyle} 
                initialRegion={{
                    latitude: -34.545804,
                    longitude: -58.466012,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}>
                    <Marker coordinate={{ latitude: -34.545804, longitude: -58.466012}}
                        title={'Mi casa'} >
                    </Marker>
                </MapView>
            </Content>
            </>
        );
    }   
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});