import React from 'react';
import {Text, Container, Header, Body, Content} from 'native-base';
import LogoImage from '../img/LogoImage';
import MapView, {Marker} from 'react-native-maps';
import {Location, Permissions} from 'expo';
import { StyleSheet, Dimensions } from 'react-native';
export default class Mapa extends React.Component {
    
    constructor(props) {
        super(props);

        this.state ={
            latitude: 1,
            longitude: 0
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude, 
                    error: null
                })
            },
            error => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
        );
    }

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
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.0121,
                  }}>
                    <Marker coordinate={this.state}
                        title={'mi casa'}
                        description={'cont sonora: 44'} >
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