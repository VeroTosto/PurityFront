// myApiKey: AIzaSyB54rA_Liu1QOxxAZAX2fFhViLqFc81ROg
// https://maps.googleapis.com/maps/api/places/nearbysearch/json?
import React from 'react';
import {Text, Container, Header, Body, Content} from 'native-base';
import LogoImage from '../img/LogoImage';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Location, Permissions} from 'expo';
import { StyleSheet, Dimensions } from 'react-native';
import * as firebase from 'firebase'; 

export default class Mapa extends React.Component {
    
    constructor(props) {
        super(props);

        this.state ={ 
            latitude: -34.545,
            longitude: -58.466,
            marker: {
                lat: '',
                long: '',
                valor: '',
                show: false,
            }
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
        
        // this.GetDocumentsMediciones();
    }
    
    // GetDocumentsMediciones = () => {
    //     var docRef = firebase.firestore().collection("puntos verdes").get()
    //     .then(function(querySnapshot) {
    //         querySnapshot.forEach(function(doc) {
    //             console.log('hola', doc.data());
    //             var listAux =  this.state.puntosVerdes.concat(doc.data())
    //             this.setState({puntosVerdes: listAux})
    //             // console.log(this.state.puntosVerdes)
    //         }.bind(this));
    //     }.bind(this));
    // }

    // mapMarkers = () => {
    //     if(this.state.puntosVerdes.length > 0) {
    //         console.log('hola')
    //         return this.state.puntosVerdes.map(() => <Marker
    //         coordinate={{ latitude: this.state.puntosVerdes.latitud, longitude: this.state.puntosVerdes.longitud }}
    //         title={puntosVerdes.lugar} >
    //     </Marker >)}
    //     return <></>
    // }

    getUrlWithParameters(longitud, latitud){
        const url = "http://api.airvisual.com/v2/nearest_city?";
        const location = `lat=${latitud}&lon=${longitud}`;
        const key = `&key=${"5aa42b1e-0842-415f-9264-219702fcb372"}`;
        console.log(latitud + longitud)
        console.log( `${url}${location}${key}`);
        return `${url}${location}${key}`;
        
    }

    CalidadAire = (longitud, latitud) =>{
        var requestOptions = {
        method: 'GET',
        redirect: 'follow'
        };
        fetch(this.getUrlWithParameters(longitud, latitud), requestOptions)
        .then(response => response.json())
        .then(responseJson => {
            let aquis = ''
            let result;
            try {
                aquis = responseJson.data.current.pollution.aqius
                if(aquis > 0 && aquis <= 50) {
                    result = 'Excelente'
                }
                else if(aquis > 50 && aquis <= 100) {
                    result = 'Buena'
                }
                else if(aquis > 100 && aquis <= 150) {
                    result = 'Moderada'
                }
                else if(aquis > 150 && aquis <= 200) {
                    result = 'Mala'
                }
                else if(aquis > 200 && aquis <= 300) {
                    result = 'Muy mala'
                }
                else if(aquis > 300) {
                    result = 'Peligrosa'
                }
            } catch (error) {
                aquis = 'Desconocido'
                result = 'Desconocido'
            }
            console.log(responseJson)
            this.setState(prevState => ({
                marker: {
                    ...prevState.marker,
                    valor: result,
                    show: true,
                }
            }));
        })
        .catch(error => {
        console.error(error);
        });
        // .then(response => response.json())
        // .then(result => result.data.current.pollution.aqius)
        // .catch(error => console.log('error', error));
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
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                        latitudeDelta: 0.15,
                        longitudeDelta: 0.0121,
                    }}
                    onPress={(e) => {
                        let eLat = e.nativeEvent.coordinate.latitude;
                        let eLon = e.nativeEvent.coordinate.longitude
                        console.log("eLat", eLat)
                        this.setState(prevState => ({
                            marker: {
                                ...prevState.marker,
                                lat: eLat, 
                                long: eLon
                            }
                            }), 
                            () => {
                                this.CalidadAire(this.state.marker.long, this.state.marker.lat)
                            }
                        )}
                    }
                >
                    {   this.state.marker.show &&
                        <MapView.Marker coordinate={{latitude: this.state.marker.lat, longitude: this.state.marker.long}} title={'La calidad del aire es: ' + this.state.marker.valor} />
                    }
                    <Marker coordinate={this.state}
                        title={'mi ubicacion actual'} >
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.656719,
                        longitude: -58.45984
                        }}
                        title="Punto Verde"
                        description="ESCUELA (JARDÍN)"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.615939,
                        longitude: -58.440633
                        }}
                        title="Punto Verde"
                        description="PLAZA GIORDANO BRUNO"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.634530,
                        longitude: -58.481731
                        }}
                        title="Punto Verde"
                        description="EPC N° 3 DE 11 ANGELA MEDONE DE CAVIGLIA"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.614489,
                        longitude: -58.510419
                        }}
                        title="Punto Verde"
                        description="JARDIN N°17 VICTORIA OCAMPO"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.616746,
                        longitude: -58.374521
                        }}
                        title="Punto Verde"
                        description="LUIS A. HUERGO - NIVEL SECUNDARIO"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.661375,
                        longitude: -58.490663
                        }}
                        title="Punto Verde"
                        description="INSTITUTO NUESTRA SEÑORA DE LA MISERICORDIA"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.617754,
                        longitude: -58.507323
                        }}
                        title="Punto Verde"
                        description="PLAZA MONSEÑOR FERMIN LAFITTE"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.639847,
                        longitude: -58.366908
                        }}
                        title="Punto Verde"
                        description="PLAZA MATHEU"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.583708,
                        longitude: -58.437834
                        }}
                        title="Punto Verde"
                        description="MERCADO BOMPLAND"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.650475,
                        longitude: -58.424654
                        }}
                        title="Punto Verde"
                        description="SEDE COMUNA 4"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.548840,
                        longitude: -58.461638
                        }}
                        title="Punto Verde"
                        description="ESTACIÓN NUÑEZ"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.577580,
                        longitude: -58.494643
                        }}
                        title="Punto Verde"
                        description="CARREFOUR VILLA URQUIZA"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.627680,
                        longitude: -58.520515
                        }}
                        title="Punto Verde"
                        description="PLAZA CIUDAD DE BANFF"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.633653,
                        longitude: -58.519508
                        }}
                        title="Punto Verde"
                        description="VELEZ SARFIELD"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.629501,
                        longitude: -58.48369
                        }}
                        title="Punto Verde"
                        description="PLAZA VELEZ SARSFIELD"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.589078,
                        longitude: -58.41586
                        }}
                        title="Punto Verde"
                        description="PLAZA GUEMES"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.606660,
                        longitude: -58.440071
                        }}
                        title="Punto Verde"
                        description="JUMBO CABALLITO"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.611427,
                        longitude: -58.369824
                        }}
                        title="Punto Verde"
                        description="SENASA"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.568510,
                        longitude: -58.477729
                        }}
                        title="Punto Verde"
                        description="SEDE COMUNAL 12"
                        pinColor='green'>
                    </Marker>
                    <Marker
                        coordinate={{
                        latitude: -34.617043,
                        longitude: -58.404144
                        }}
                        title="Punto Verde"
                        description="PLAZA DR. J. M. VELASCO IBARRA"
                        pinColor='green'>
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