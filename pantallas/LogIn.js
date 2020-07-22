import React from 'react';
import { Card, CardItem, Text, Row, Col, Input, Form, Item, Label, Content} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LogoImage2 from '../img/LogoImage2';
export default class LogIn extends React.Component {

    render() {
        return (
            <Col style= {{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Row>
                <LogoImage2 />
            </Row>
            <Row style= {{width: '100%', marginBottom: 150}}>
                <Form style = {{alignItems: 'center', width:'100%'}}>
                    <Item regular style = {{marginTop: 5, backgroundColor: 'white', borderRadius: 5, width: '70%', shadowColor: "#000", shadowOffset: {width: 0, height: 2,}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4,}}>
                        <Input placeholder="Email"/>
                    </Item>
                    <Item regular style = {{marginTop: 5, backgroundColor: 'white', borderRadius: 5,  width: '70%', shadowColor: "#000", shadowOffset: {width: 0, height: 2,}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4,}}>
                        <Input secureTextEntry = {true} underline = {false} placeholder="Contraseña"/>
                    </Item>
                    <Item style= {{marginTop: 10}}>
                        <TouchableOpacity style = {{borderRadius: 10, backgroundColor: '#00B18F', paddingHorizontal:40, paddingVertical:10 }} onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Iniciar sesion</Text>
                        </TouchableOpacity>
                    </Item>
                    <Item style= {{marginTop: 10}}>
                        <TouchableOpacity style= {{backgroundColor: '#FFFFFF',}} onPress={() => this.props.navigation.navigate('SignUp')}>  
                            <Text style={{textDecorationLine: 'underline', fontSize: 10, color: 'black'}}>Crear cuenta</Text>
                        </TouchableOpacity>
                    </Item>
                </Form>
            </Row>
            </Col>
        )
    }
}