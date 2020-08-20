import React from 'react'
import { Card, CardItem, Text, Row, Col, Input, Form, Item, Label, Content, Header, Body} from 'native-base';
import {Button} from 'react-native';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LogoImage from '../img/LogoImage';
import { faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import * as firebase from 'firebase'; 

export default class User extends React.Component {
    constructor(props){
        super (props) 
        this.state = ({
          email: '',
          nombrecompleto:'',
          direccion:'',
        })
    }

    componentDidMount() {
        this.DatosUsuario();
    }

    DatosUsuario = () =>{
    var user = firebase.auth().currentUser;
    var uid = user.uid; 
    var docRef = firebase.firestore().collection("usuarios").doc(uid);
    var email1;
    var nombre1;
    docRef.get().then(function(doc) {
        if (doc.exists){
        console.log(uid);
        email1 = doc.get("email");
        nombre1 = doc.get("nombre");
        this.setState({ email: email1 });
        this.setState({nombrecompleto: nombre1})
        console.log("Document data:", email1);
        console.log("Document data:", nombre1);
        }
        else{
        console.log("no existe documento"); 
        }
    }.bind(this))
    }

    DirrecionUsuario = () =>{
    var user = firebase.auth().currentUser;
    var uid = user.uid; 
    var docRef = db.collection("usuarios").doc(uid);
    docRef.get().then(function(doc) {
        if (doc.exists){
        console.log(uid);
        console.log("Document data:", doc.get("direccion"));
        }
        else{
        console.log("no existe documento"); 
        }
    })
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
                <Col>
                    <Row style={{justifyContent: 'center', marginTop: 30}}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 70 } style = {{color: '#817E7E'}}/>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Text style= {{alignSelf: 'center', fontSize: 20, fontWeight: 'bold', marginTop: 10}}>{this.state.nombrecompleto}</Text>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Text>{this.state.email}</Text>
                    </Row>
                    <Row style={{justifyContent: 'center'}}>
                        <Card style = {{width: '85%', borderRadius: 5, marginTop: 20, padding: 20, }}>
                            <Text style= {{alignSelf: 'center', fontSize: 17}}>Progreso de la Contaminacion</Text>
                        </Card>
                    </Row>
                    <Form style = {{alignItems: 'center', width:'100%', marginTop: 10}}>
                        <Item>
                            <Text style={{fontSize: 20}}>Configuración</Text>
                        </Item>
                    </Form>
                </Col>
            </Content>
            </>
        )
    }
}