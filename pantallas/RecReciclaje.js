import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header} from 'native-base';
import LogoImage from './../img/LogoImage';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RecReciclaje extends React.Component {

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
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Reducir</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>No aceptar bolsas si no son imprescindibles</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Evitar usar productos excesivamente empaquetados. Optar por envases familiares antes que individuales</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Sustituir los botellones de agua mineral por un filtro de agua</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Llevar bolsas de género para ir al supermercado</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Reusar</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Los envases de vidrio son preferibles</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Utilizar pilas recargables y cargadores solares</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Reutilizar las bolsas plásticas para la basura</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Vender artículos usados y compartir libros entre amigos</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Recliclar</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Los materiales reciclados pueden convertirse en una amplia gama de productos</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Residuos orgánicos: con plantas se realiza compostaje doméstico, que ahorra energía y es útil</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Papel y cartón: sí se reciclan los papeles, sobres, diarios, folletos, cajas de cartón, revistas</Text>
                {/* <Text style={{marginLeft: 20, marginTop: 10}}>En cambio, no pueden ser reciclados las siguientes cosas: apeles plastificados, los adhesivos, los encerados, los de fax, las servilletas usadas</Text> */}
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Puntos Verdes</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Si eres residente de la Ciudad Autonoma de Buenos Aires</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>En nuestra sección de mapa podrás visualizar cuales son los puntos verdes cerca de tu locación para dejar los residuos</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Acuerdate de informarte acerca de que es reciclable y que no lo es</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Mas Información</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Si te quedaste con ganas de más información:</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>En nuestra sección de recomendaciones de productos encontrarás todos los productos sustentables que necesites </Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>En nuestra sección de hogar encontrarás que puedes hacer en tu casa para hacer una vida más sustentable</Text>
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