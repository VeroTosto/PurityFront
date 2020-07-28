import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Container, Content, Body, ListItem, CheckBox, Card, Header} from 'native-base';
import LogoImage from './../img/LogoImage';
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
            <Text style={{fontSize: 20, marginLeft: 15, marginTop: 10}}>Buenos días Pepito Sanchez!</Text>
            <Text style={{fontSize: 15, marginLeft: 15, marginTop: 10}}>La calidad de aire en tu lugar de residencia es <Text style={{color: this.state.color}}>{this.state.texto}</Text>, puedes seguir las siguientes recomendaciones:</Text>
            <Card style={{width: '90%', alignSelf: 'center', marginTop: 15}}>
                <ListItem>
                    <Text style={{alignSelf: 'flex-start'}}>Planta alguna de las plantas que se indican en nuestra ventana de información</Text>
                    <Body >
                        <CheckBox style={styles.checkbox} checked={true} color='#45CF2F'/>
                    </Body>
                </ListItem>
            </Card>
            <Card style={{width: '90%', alignSelf: 'center'}}>
                <ListItem>
                    <Text style={{alignSelf: 'flex-start'}}>Usa tu auto menos días por semana</Text>
                    <Body>
                        <CheckBox style={styles.checkbox} checked={false} color='#45CF2F' />
                    </Body>
                </ListItem>
            </Card>
            <Card style={{width: '90%', alignSelf: 'center'}}>
                <ListItem>
                    <Text style={{alignSelf: 'flex-start'}}>Si estás pensando en pintar tu casa, la pintura biometica ayuda a la disminución de particulas contaminantes en la atmósfera</Text>
                    <Body>
                        <CheckBox style={styles.checkbox} checked={false} color='#45CF2F'/>
                    </Body>
                </ListItem>
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