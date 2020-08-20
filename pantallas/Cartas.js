import React from 'react';
import { Tab, Tabs, Header, Footer, FooterTab, Button, Content, Container, Body} from 'native-base';
import {Text} from 'react-native';
import ContSonora from './Carta1';
import ContAtm from './Carta2';
import LogoImage from '../img/LogoImage';

export default class Cartas extends React.Component {

    constructor(props){
        super (props)
    }

    render() {
        const { navigation } = this.props;
        return(
            <>
            <Header style ={{backgroundColor: '#00B18F', height: 60}} >
                <Body>      
                    <LogoImage />
                </Body>
            </Header>
            <Content>
                <Tabs>
                    <Tab activeTabStyle= {{backgroundColor: '#059e77'}} tabStyle= {{backgroundColor: '#059e77'}} style={{backgroundColor: '#EFEFEF'}} heading="Contaminacion del Aire">
                        <ContAtm nav={navigation}/>
                    </Tab>

                    <Tab activeTabStyle= {{backgroundColor: '#059e77'}} tabStyle= {{backgroundColor: '#059e77'}} style={{backgroundColor: '#EFEFEF'}} heading="Contaminacion Sonora">
                        <ContSonora />
                    </Tab>
                </Tabs>
            </Content>
            </>
        );
    }

}