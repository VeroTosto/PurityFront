import React, { Component } from 'react';
import { Card, CardItem, Text, Container, Row, Col} from 'native-base';
import MyListItem from './../components/MyListItem'
import Geocoder from 'react-native-geocoding';
import {Button, View, StyleSheet} from 'react-native';
import {ReanimatedArc, ReanimatedArcBase} from '@callstack/reanimated-arc';

export default class ContSonora extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valorRuido: this.props.nav.state.params.valorRuido,
            texto: null,
            descripcion: null,
            color: null,
            direccion: null,
        }; 
        Geocoder.init("AIzaSyB54rA_Liu1QOxxAZAX2fFhViLqFc81ROg");
    }

    setValores = () => {
        if(this.state.valorRuido > 0 && this.state.valorRuido <= 65) {
            this.setState({ texto: 'Bueno', descripcion: 'El nivel de contaminación sonora no es elevado y no tiene implicaciones para la salud', color: '#BEF98F'})
        }
        else if(this.state.valorRuido > 65 && this.state.valorRuido <= 99) {
            this.setState({ texto: 'Moderado', descripcion: 'El nivel de contaminacion sonora puede tener implicaciones para tu salud', color: '#BCFC88'})
        }
        else if(this.state.valorRuido >= 100) {
            this.setState({ texto: 'Peligroso', descripcion: 'El nivel de contaminacion sonora es dañino para tu salud', color: '#F5F67A'})
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
                        <Text style={{fontSize: 20}}>Contaminacion Sonora</Text>
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
                                color="#BEF98F"
                                diameter={200}
                                width={20}
                                arcSweepAngle={100}
                                lineCap="round"
                                rotation={0}
                            />
                            </View>
                            <Text style={{fontSize: 40}}>{this.state.valorRuido}</Text>
                        </CardItem>
                        <CardItem style={{alignSelf: 'center'}}>
                            <Text style={{fontSize: 12, color: '#585858'}}>Calidad Sonora: {this.state.texto}</Text>
                        </CardItem>
                        <CardItem style={{alignSelf: 'center'}}>
                            <Text style={{fontSize: 20, color: '#585858'}}>Hace 3 horas</Text>
                        </CardItem>
                </Card>
            </Row>
            <Row style = {{alignSelf: 'center'}}>
                <Card style = {{width: '85%', borderRadius: 20, marginTop: 10, padding: 20, justifyContent: 'center'}}>
                    <Text style = {{alignSelf: 'center', fontSize: 20, fontWeight: 'bold'}}>{this.state.direccion}</Text>
                </Card>
            </Row>
            <Row style = {{alignSelf: 'center'}}>
                <Card style={{borderRadius: 10, width: '85%', height: 300}}>
                    <Row>
                        <Col style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                            <MyListItem color='#5DF163' text='Bueno'/>
                            <MyListItem color='#EEF06D' text='Moderado'/>
                            <MyListItem color='#E82929' text='Peligroso'/>
                        </Col>
                        <Col style={{justifyContent: 'center'}}>
                            <Card style={{borderRadius: 5, alignItems: 'center', padding: 10, marginRight: 10, backgroundColor: this.state.color}}>
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
