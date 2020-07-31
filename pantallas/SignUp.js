import React from 'react';
import { Card, CardItem, Text, Row, Col, Input, Form, Item, Label} from 'native-base';
import { StyleSheet, TouchableOpacity, Alert } from 'react-native';
import LogoImage2 from '../img/LogoImage2';

import * as firebase from 'firebase';  
import "firebase/firestore";
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8RZyosskoo3Invm7Iy9QaVo4CLLFR-is",
    authDomain: "pruebareactnative-c445e.firebaseapp.com",
    databaseURL: "https://pruebareactnative-c445e.firebaseio.com",
    projectId: "pruebareactnative-c445e",
    storageBucket: "pruebareactnative-c445e.appspot.com",
    messagingSenderId: "660945583741",
    appId: "1:660945583741:web:20448b91f461646ad87b14"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();


export default class SignUp extends React.Component {
    constructor(props){
    super (props)
        this.state = ({
          email:'',
          password:'',
          nombrecompleto:'',
          direccion:'',
        })
    }

    SingUpUser = (email, password, nombrecompleto, direccion ) =>{ 
        if (!email || !password || !nombrecompleto || !direccion){
          Alert.alert ('Complete todos los campos')
        }
        else {
       try{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user){
          console.log(user)
          console.log("se ha creado la cuenta")
          var user = firebase.auth().currentUser; 
          var uid; 
          uid =  user.uid;
          console.log("el uid de usuario es " + uid)
          db.collection('usuarios').doc(uid).set({
            nombre: nombrecompleto,
            email: email,
            direccion: direccion,
            verificacion: user.emailVerified
          })
          user.sendEmailVerification();
          user.reload()
        
          Alert.alert ("Se ha creado la cuenta, pero recuerde entrar a su mail y verificar su cuenta. En caso de no hacerlo no podra iniciar sesion.") 
        })
        
      }
        catch(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
           Alert.alert('Contrasenia muy debil');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        }
      }
    }

    CambiarPantalla = () =>{
        this.props.navigation.navigate('LogIn')
    }

    render() {
        return (
            <Col style= {{justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
                <Row>
                    <LogoImage2 />
                </Row>
                <Row style= {{width: '100%', marginBottom: 300}}>
                    <Form style = {{width: '100%', alignItems: 'center' }}>
                        <Item regular style = {styles.txtInput} >
                            <Input 
                                underline = {false} 
                                placeholder="Email"
                                onChangeText={email => this.setState({ email })}/>
                        </Item>
                        <Item regular style = {styles.txtInput}>
                            <Input 
                                secureTextEntry = {true} 
                                underline = {false} 
                                placeholder="Contraseña"
                                onChangeText={password => this.setState({ password })}/>
                        </Item>
                        <Item regular style = {styles.txtInput}>
                            <Input 
                                underline = {false}
                                placeholder='Nombre Completo'
                                onChangeText={nombrecompleto => this.setState({ nombrecompleto })}/>
                        </Item>
                        <Item regular style = {styles.txtInput}>
                            <Input 
                                underline = {false} 
                                placeholder="Dirección" 
                                onChangeText={direccion => this.setState({ direccion })}/>
                        </Item>
                        <Item style= {{marginTop: 10}}>
                            <TouchableOpacity 
                            style = {styles.btnSignUp} 
                            onPress={ () => { this.SingUpUser(this.state.email, this.state.password, this.state.nombrecompleto, this.state.direccion); this.CambiarPantalla();}}>
                                <Text style={{color: 'white', fontWeight: 'bold'}}>Crear Cuenta</Text>
                            </TouchableOpacity>
                        </Item>
                    </Form>
                </Row>
            </Col>
        )
    }
}

const styles = StyleSheet.create({
    txtInput: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '70%'
    },
    btnSignUp: {
        borderRadius: 10,
        backgroundColor: '#00B18F',
        paddingHorizontal: 40,
        paddingVertical: 10
    }
});