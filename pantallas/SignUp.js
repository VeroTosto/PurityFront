import React from 'react';
import { Card, CardItem, Text, Row, Col, Input, Form, Item, Label} from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LogoImage2 from '../img/LogoImage2';
export default class LogIn extends React.Component {
    render() {
        return (
            <Col style= {{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <Row>
                    <LogoImage2 />
                </Row>
                <Row style= {{width: '100%', marginBottom: 300}}>
                    <Form style = {{width: '100%', alignItems: 'center' }}>
                        <Item regular style = {{marginTop: 10, backgroundColor: 'white', borderRadius: 5, width: '70%'}}>
                            <Input placeholder='Nombre'/>
                        </Item>
                        <Item regular style = {{marginTop: 10, backgroundColor: 'white', borderRadius: 5, width: '70%'}}>
                            <Input underline = {false} placeholder="Apellido"/>
                        </Item>
                        <Item regular style = {{marginTop: 10, backgroundColor: 'white', borderRadius: 5, width: '70%'}}>
                            <Input secureTextEntry = {true} underline = {false} placeholder="Contraseña"/>
                        </Item>
                        <Item regular style = {{marginTop: 10, backgroundColor: 'white', borderRadius: 5, width: '70%'}}>
                            <Input underline = {false} placeholder="Dirección"/>
                        </Item>
                        <Item regular style = {{marginTop: 10, backgroundColor: 'white', borderRadius: 5, width: '70%'}}>
                            <Input underline = {false} placeholder="Email"/>
                        </Item>
                        <Item style= {{marginTop: 10}}>
                            <TouchableOpacity style = {{borderRadius: 10, backgroundColor: '#00B18F', paddingHorizontal:40, paddingVertical:10 }} onPress={() => this.props.navigation.navigate('LogIn')}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Crear Cuenta</Text>
                            </TouchableOpacity>
                        </Item>
                    </Form>
                </Row>
            </Col>

        )
    }
}