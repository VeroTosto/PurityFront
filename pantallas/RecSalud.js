import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header} from 'native-base';
import LogoImage from './../img/LogoImage';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RecSalud extends React.Component {

    render() {
        return (
        <>
        <Header style ={{backgroundColor: '#00B18F', height: 60}} >
            <TouchableOpacity>
                <FontAwesomeIcon icon={ faArrowLeft } size={ 20 } style = {{color: 'white', alignSelf: 'flex-start', marginTop: 20}} onPress={() => this.props.navigation.navigate('Home')}/>
            </TouchableOpacity>
            <Body>
                <LogoImage />
            </Body>
        </Header>
        <ImageBackground source= {require('../assets/TrianguloClaro.jpg')} style={styles.backgroundimage}>
        <Content>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Personas Mayores</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Evitar las calles con más tráfico</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Utilizar barbijo si siente que le cuesta respirar</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Elevar las defensas de su cuerpo lo más posible consumiendo alimentos como cítricos, jengibre y ajo</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Si vive en una ciudad con mucha contaminación opte por llevar a cabo la mayor parte de sus actividades dentro de su casa</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Niñxs</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Los bebés y los niños más pequeños pueden estar expuestos hasta a 60% más contaminantes que los adultos</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Al ser más bajos, los niños están más próximos a los caños de escape y mas expuestos a la contaminación</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Se recomienda evitar calles con mucho tráfico</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Usar las coberturas en los carritos de bebé para reducir la exposición al aire contaminado</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Personas Embarazadas</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Se recomienda evitar las calles con mucho tráfico</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Ejercicio</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Evita el ejercicio al aire libre durante la hora pico y cuando los niveles de contaminación son altos</Text>
                </ImageBackground>
            </Card>
        </Content>
        </ImageBackground>
        </>
        );
    }
}
const styles = StyleSheet.create({
    checkbox: {
        alignSelf: 'flex-end', 
        borderRadius: 3, 
        marginRight: 5
    },
    backgroundimage:{
        width : "100%",
        flex: 1
    }
  });