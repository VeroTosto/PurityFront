import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header} from 'native-base';
import LogoImage from './../img/LogoImage';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class RecOrg extends React.Component {

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
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Fundacion Garrahan</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>La Fundación Garrahan recibe las tapas de botellas de plástico</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Esta se encarga de vender el plastico para reciclarlo y que terceros hagan productos nuevos a partir de estas</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Botellas de Amor</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>La ong botellas de amor se encarga de recolectar botellas llenas de plásticos de un solo uso para reciclarlos</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Transformandolas en madera plástica para hacer construcciones</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Las botellas son super faciles de hacer y hay multiples puntos en la ciudad en donde podes dejarlas</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Jovenes por el Clima</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Esta organizacion de jovenes se encarga de muchísimas cuestiones en cuanto a lo ambiental</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Divulgan información de excelente nivel si te interesan estos temas</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>La información que pueden proveer es muchisima y es super util</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Ecovolta</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es una ong ambientalista y educativa</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Se encargan entre muchas otras cosas, de reciclar las pilas que no pueden ponerse en el tacho de reciclaje</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Evita muchísima contaminación ya que las pilas son tóxicas</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Tienen múltiples lugares en donde dejarlas</Text>
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