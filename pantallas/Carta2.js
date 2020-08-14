import { Card, CardItem, Text, Row, Col} from 'native-base';
import MyListItem from './../components/MyListItem';
import Geocoder from 'react-native-geocoding';
import React, {useState, useCallback, useRef} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import {ReanimatedArc, ReanimatedArcBase} from '@callstack/reanimated-arc';
import Reanimated, {Easing} from 'react-native-reanimated';

export default class ContAtm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            valor: this.props.nav.state.params.valor,
            texto: null,
            descripcion: null,
            color: null,
            direccion: null,
        }; 
        Geocoder.init("AIzaSyB54rA_Liu1QOxxAZAX2fFhViLqFc81ROg");
    }

    setValores = () => {
        if(this.state.valor > 0 && this.state.valor <= 50) {
            this.setState({ texto: 'Excelente', descripcion: 'Sin implicaciones para la salud', color: '#BEF98F'})
        }
        else if(this.state.valor > 50 && this.state.valor <= 100) {
            this.setState({ texto: 'Buena', descripcion: 'Algunos contaminantes pueden afectar ligeramente a muy pocos individuos hipersensibles', color: '#BCFC88'})
        }
        else if(this.state.valor > 100 && this.state.valor <= 150) {
            this.setState({ texto: 'Moderada', descripcion: 'Las personas sanas pueden experimentar irritaciones leves y las personas sensibles se verán ligeramente afectadas en mayor medida', color: '#F5F67A'})
        }
        else if(this.state.valor > 150 && this.state.valor <= 200) {
            this.setState({ texto: 'Mala', descripcion: 'Las personas sensibles experimentarán condiciones más graves. Los corazones y los sistemas respiratorios de las personas sanas pueden verse afectados', color: '#F6AE57'})
        }
        else if(this.state.valor > 200 && this.state.valor <= 300) {
            this.setState({ texto: 'Muy mala', descripcion: 'Las personas sanas suelen mostrar síntomas. Las personas con enfermedades respiratorias o cardíacas se verán significativamente afectadas y experimentarán una resistencia reducida en las actividades', color: '#F28269'})
        }
        else if(this.state.valor > 300) {
            this.setState({ texto: 'Peligrosa', descripcion: 'Las personas sanas experimentarán una resistencia reducida en las actividades y también pueden mostrar síntomas notablemente fuertes. Los ancianos y los enfermos pueden verse perjudicados', color:'#EE4C4C'})
        }
    }
    componentDidMount = () => {
        this.setValores();

        navigator.geolocation.getCurrentPosition(
            position => {
                Geocoder.from(position.coords.latitude, position.coords.longitude)
                .then(json => {
                    var addressComponent = json.results[0].address_components;
                    var num = addressComponent[0].long_name
                    var street = addressComponent[1].long_name
                    console.log(addressComponent);
                    this.setState({direccion: street + " " + num})
                })
                .catch(error => console.warn(error));
            },
            error => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
        );
    }

    render() {
        return (
            <Col style={{paddingVertical: 10}}>
            <Row style = {{alignSelf: 'center', height: 350}}>
                <Card style = {{width: '85%', borderRadius: 10}}>
                    <CardItem header style = {{alignSelf: 'center'}}>
                        <Text>Contaminacion del Aire</Text>
                    </CardItem>
                    <CardItem style={styles.container}>
                        {/* <Reanimated.Code
                            exec={Reanimated.call([arcAngle.current], ([value]) => {
                            setText(`${Math.round((value / 240) * 100)}%`);
                        })}
                        /> */}
                        <View style={styles.behind}>
                        <ReanimatedArcBase 
                            style={{alignSelf: 'center', transform: [{rotate: '240deg'}]}}
                            color="lightgrey"
                            diameter={200}
                            width={20}
                            arcSweepAngle={240}
                            lineCap="round"
                            rotation={0}
                        />
                        </View>
                        <View style={styles.center}>
                        <ReanimatedArc 
                            style={{alignSelf: 'center', transform: [{rotate: '240deg'}]}}
                            color="purple"
                            diameter={200}
                            width={20}
                            arcSweepAngle={210}
                            lineCap="round"
                            rotation={0}
                        />
                        </View>
                        <Text style={{fontSize: 40}}>{this.state.valor}</Text>
                    </CardItem>
                    <CardItem style={{alignSelf: 'center'}}>
                        <Text style={{fontSize: 10, color: '#585858'}}>Calidad del Aire: {this.state.texto}</Text>
                    </CardItem>
                    <CardItem style={{alignSelf: 'center'}}>
                        <Text style={{fontSize: 20, color: '#585858'}}>Hace 3 horas</Text>
                    </CardItem>
                </Card>
            </Row>
            <Row style = {{alignSelf: 'center'}}>
                <Card style = {{width: '85%', borderRadius: 20, marginTop: 10, padding: 20}}>
                <Text style = {{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>{this.state.direccion}</Text>
                </Card>
            </Row>
            <Row style = {{alignSelf: 'center'}}>
                <Card style={{borderRadius: 10, width: '85%', height: 300}}>
                    <Row>
                        <Col style={{alignItems: 'flex-start'}}>
                            <MyListItem color='#5DF163' text='Excelente'/>
                            <MyListItem color='#A2F361' text='Buena'/>
                            <MyListItem color='#EEF06D' text='Moderada'/>
                            <MyListItem color='#F69624' text='Mala'/>
                            <MyListItem color='#EF674A' text='Muy mala'/>
                            <MyListItem color='#E82929' text='Peligrosa'/>
                        </Col>
                        <Col style={{justifyContent: 'center'}}>
                            <Card style={{borderRadius: 5, alignItems: 'center', padding: 5, backgroundColor: this.state.color}}>
                                <Text>{this.state.descripcion}</Text>
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Row>
            </Col>
        )
    }   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        marginTop: 25,
    },
    center: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute'
    },
    behind: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  })

