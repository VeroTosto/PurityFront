import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header} from 'native-base';
import LogoImage from './../img/LogoImage';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RecProductos extends React.Component {

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
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Productos Sustentables</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Existen muchos productos que usamos en nuestra vida cotidiana en su versión más ecológica</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>El plástico es aquel que es más recomendable reemplazar ya que acaba en bosques, ríos, mares y playas, y no solo produce mucha contaminación, sino que también daña los hábitats de los animales</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Cepillo de Bambú</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>El cepillo de dientes de Bambu es utilizable y luego plantable</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>el único plástico que posee es el de la parte de arriba del cepillo</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>este puede sacarse y ser reciclado, metido en una botella de amor, o en la bolsa de reciclables</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Shampoo Sólido</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Los envases de plástico son de los productos más contaminantes</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es por eso que el shampoo solido viene sin empaque</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es super simple de usar</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Muchos son sin parabenos ni siliconas, elementos dañinos para tu pelo</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Se vende en un montón de tiendas y negocios</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Botellas Reutilizables</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Los envases de plástico son de los productos mas contaminantes</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es por eso que optar por llevar botellas propias a lugares donde dan vasos de plastico</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es un habito que es super facil de implementar</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Hay muchísimos lugares que venden estos productos</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Cosméticos</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Los protectores solares minerales no dañan el medio ambiente</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es preferible usar una sola toalla de desmaquillante con alguna crema o agua micelar</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Optar por cosméticos que no posean </Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Si utilizas el transporte público, el consumo y la contaminación será mucho menor ya que en vez de dos vehículos en la calle habrá uno</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Copita Menstrual</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es inmensa la cantidad de toallitas que se gastan al año</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>No son reciclables y tardan 500 años en ser degradadas</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Por esto la copita menstrual es un buen reemplazo a las toallas menstruales</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Hay muchisima información en páginas de instagram en las que pueden informarse acerca de su uso</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Puede durar hasta 8 años y es super economica por esta razón</Text>
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