import React from 'react';
import {Text, Container, Header, Body, Content} from 'native-base';
import LogoImage from '../img/LogoImage';
export default class Mapa extends React.Component {
    render() {
        return (
            <>
            <Header style ={{backgroundColor: '#00B18F', height: 60}} >
                <Body>
                <LogoImage />
                </Body>
            </Header>
            <Content>
                <Text>Felicidades ahora estas en la pantalla del mapa</Text>
            </Content>
            </>
        );
    }   
}