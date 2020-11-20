import React from 'react';
import {StyleSheet, ImageBackground, Image} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header, Row, Col} from 'native-base';
import LogoImage from './../img/LogoImage';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Recomendaciones extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props
        this.state = {
            valor: navigation.state.params.valor,
            texto: null,
            color: null,
        }
    }
    
    setValores = () => {
        if(this.state.valor > 0 && this.state.valor <= 50) {
            this.setState({ texto: 'Excelente', color: '#5DF163'})
        }
        else if(this.state.valor > 50 && this.state.valor <= 100) {
            this.setState({ texto: 'Buena', color: '#75D16B'})
        }
        else if(this.state.valor > 100 && this.state.valor <= 150) {
            this.setState({ texto: 'Moderada', color: '#EEF06D'})
        }
        else if(this.state.valor > 150 && this.state.valor <= 200) {
            this.setState({ texto: 'Mala', color: '#F69624'})
        }
        else if(this.state.valor > 200 && this.state.valor <= 300) {
            this.setState({ texto: 'Muy mala', color: '#EF674A'})
        }
        else if(this.state.valor > 300) {
            this.setState({ texto: 'Peligrosa', color: '#E82929'})
        }
    }

    componentDidMount = () => {
        this.setValores();
    }

    render() {
        return (
        <>
        <Header style ={{backgroundColor: '#00B18F', height: 60}} >
            <Body>
                <LogoImage />
            </Body>
        </Header>
        <ImageBackground source= {require('../assets/TrianguloSinAclarar.jpg')} style={styles.backgroundimage}>
        <Content>
            <Row>
                <Col>
                    <Card style={{width: '90%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RecSalud')}>
                            <Image source = {require('./../assets/saludletras.png')} style={{borderRadius: 5, height: 165, width: 165}}/>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RecReciclaje')}>
                            <Image source = {require('./../assets/reciclajeletras.png')} style={{borderRadius: 5, height: 165, width: 165}}/>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RecProductos')}>
                            <Image source = {require('./../assets/productosletras.png')} style={{borderRadius: 5, height: 165, width: 165}}/>
                        </TouchableOpacity>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '90%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RecPlantas')}>
                            <Image source = {require('./../assets/plantasletras.png')} style={{borderRadius: 5, height: 165, width: 165}}/>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RecHogar')}>
                            <Image source = {require('./../assets/hogarletras.png')} style={{borderRadius: 5, height: 165, width: 165}}/>
                        </TouchableOpacity>
                    </Card>
                    <Card style={{width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('RecOrg')}>
                            <Image source = {require('./../assets/organizacionesletras.png')} style={{borderRadius: 5, height: 165, width: 165}}/>
                        </TouchableOpacity>
                    </Card>
                </Col>
            </Row>
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