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
                <Text style={{marginLeft: 20, marginTop: 10}}>En cambio, no pueden ser reciclados los papeles plastificados, los adhesivos, los encerados, los de fax, las servilletas usadas y los que estén manchados con restos de comida.</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Plástico: la Fundación Garrahan recibe las tapas de botellas de plástico</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Residuos de aparatos eléctricos y electrónicos: en Buenos Aires, hay empresas que se encargan de buscar los equipos y aprovecharlos </Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Los celulares, por ejemplo, pueden ser depositados en cualquier punto de venta de Movistar; y las pilas, entregadas en los puntos de recolección de Ecovolta, una ONG educativa y ambientalista</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Transporte</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Moverse en bicicleta es una opción sustentable de movilidad ya que no contamina, no emite gases de efecto invernadero, sólo consume energía humana, poco espacio y no genera ruido</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Es una forma mucho más económica de transportarse</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Mejora la salud física y mental</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Si utilizas el transporte público, el consumo y la contaminación será mucho menor ya que en vez de dos vehículos en la calle habrá uno</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Plantas</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Las plantas limpian el aire que respiras</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Las plantas brindan humedad al ambiente, esto ayuda a reducir los niveles de sequedad y partículas de polvo en nuestro hogar. Además son muy buenas para combatir el estrés y la ansiedad</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Para todas aquellas personas que no les duran mucho tiempo, las plantas ideales son: Violeta africana, Costilla de Adán, Anturio rojo y Potus. </Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Si tienes plantas en tu hogar o quieres ayudar a crecer a las plantas de tu vereda, todos los desechos orgánicos los puedes usar para hacer abono</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Puedes cultivar tu propia comida desde hierbas como menta, romero o ciboulette, hasta una planta de vegetales como de morrones o tomates</Text>
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
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Productos Sustentables</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Existen muchos productos que usamos en nuestra vida cotidiana en su versión más ecológica</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Un ejemplo son los cepillos de dientes de plástico acaban en bosques, ríos, mares y playas, los cuales no solo producen mucha contaminación, sino que también daña los hábitats de los animales</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Por eso es recomendable comprar cepillos de dientes biodegradables como el de bambú</Text>
                </ImageBackground>
            </Card>
            <Card style={{width: '85%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <ImageBackground source= {require('../assets/RecomendationCard3.jpg')} style={styles.backgroundimage}>
                <Text style={{letterSpacing: 2, alignSelf: 'center', fontWeight: 'bold'}}>Consumo Eléctrico</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Un aparato de tipo A o B son eficientes energéticamente y consumen un 70% menos que uno de tipo G</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>El mismo artefacto pero de distinta categoría de eficiencia energética  puede llegar a consumir hasta tres veces más</Text>
                <Text style={{marginLeft: 20, marginTop: 10}}>Por esto es que se debe comprar conscientemente</Text>
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