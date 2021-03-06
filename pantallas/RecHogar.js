import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header} from 'native-base';
import LogoImage from './../img/LogoImage';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RecHogar extends React.Component {

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
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Transporte</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Moverse en bicicleta es una opción sustentable de movilidad ya que no contamina, no emite gases de efecto invernadero, sólo consume energía humana, poco espacio y no genera ruido</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es una forma mucho más económica de transportarse</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Mejora la salud física y mental</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Agua</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Evita tomar duchas de más de 8 minutos o si te gustan las duchas largas puede ir apagando la ducha en momentos en los que no necesitas del agua</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Cada vez que cierras una canilla procura que no gotee y que esté bien cerrada</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Consumo Eléctrico</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Un aparato de tipo A o B son eficientes energéticamente y consumen un 70% menos que uno de tipo G</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>El mismo artefacto pero de distinta categoría de eficiencia energética  puede llegar a consumir hasta tres veces más</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Por esto es que se debe comprar conscientemente</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Consumo Eléctrico</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Opta por lámparas de bajo consumo, como las LEDs</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Aprovecha la luz solar para no tener que prender luces durante el día</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Desconecta los aparatos electrónicos cuando no los estás usando porque aunque no lo creas, gastan energía</Text>
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