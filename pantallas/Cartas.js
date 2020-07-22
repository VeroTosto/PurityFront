import React from 'react';
import { Tab, Tabs, Header, Footer, FooterTab, Button, Content, Container, Body} from 'native-base';
import ContSonora from './Carta1';
import ContAtm from './Carta2';
import LogoImage from '../img/LogoImage';
export default class Cartas extends React.Component {

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
                    <Tab style={{backgroundColor: '#EFEFEF'}} heading="Contaminacion del Aire">
                        <ContAtm nav={navigation}/>
                    </Tab>

                    <Tab style={{backgroundColor: '#EFEFEF'}} heading="Contaminacion Sonora">
                        <ContSonora />
                    </Tab>
                </Tabs>
            </Content>
            </>
        );
    }

}