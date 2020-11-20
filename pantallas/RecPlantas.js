import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header} from 'native-base';
import LogoImage from './../img/LogoImage';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RecPlantas extends React.Component {

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
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Beneficios</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Las plantas limpian el aire que respiras</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Las plantas brindan humedad al ambiente, esto ayuda a reducir los niveles de sequedad y partículas de polvo en nuestro hogar. Además son muy buenas para combatir el estrés y la ansiedad</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Puedes cultivar tu propia comida desde hierbas como menta, romero o ciboulette, hasta una planta de vegetales como de morrones o tomates</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Plantas faciles de cuidar</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Para todas aquellas personas que no les duran mucho tiempo, las plantas ideales son: Violeta africana, Costilla de Adán, Anturio rojo y Potus </Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Compost</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>El compost es ideal para reutilizar los desechos organicos que consumimos</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Requiere tierra, hojas secas, agua, residuos organicos</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es simple de hacer, hay muchos tutoriales en youtube</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Si vos no lo utilizas, es muy bueno para las plantas de tu barrio</Text>
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