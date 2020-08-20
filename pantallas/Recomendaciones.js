import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header} from 'native-base';
import LogoImage from './../img/LogoImage';
import Green from '../img/Green';
import Salud from '../img/Salud';
import Ciudad from '../img/Ciudad';
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
        <Content>
            <Card style={{width: '90%', alignSelf: 'center', marginTop: 35, borderRadius: 5}}>
                <TouchableOpacity>
                    <Text style={{letterSpacing: 2, alignSelf: 'center', marginTop: 10}}>RECOMENDACIONES DE SALUD</Text>
                    <Salud />
                </TouchableOpacity>
            </Card>
            <Card style={{width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5}}>
                <TouchableOpacity>
                    <Text style={{letterSpacing: 2, alignSelf: 'center', marginTop: 10}}>RECOMENDACIONES GENERALES</Text>
                    <Green />
                </TouchableOpacity>
            </Card>
            <Card style={{width: '90%', alignSelf: 'center', marginTop: 15, borderRadius: 5}}>
                <TouchableOpacity>
                    <Text style={{letterSpacing: 2, alignSelf: 'center', marginTop: 10, marginBottom: 10}}>RECOMENDACIONES DEL HOGAR</Text>
                    <Ciudad />
                </TouchableOpacity>
            </Card>
        </Content>
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
  });